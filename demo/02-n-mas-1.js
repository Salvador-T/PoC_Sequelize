import { sequelize, Alumno, Curso } from '../models/index.js';

(async () => {
  let consultas = 0;
  const contar = () => consultas++;

  // Enfoque ingenuo: lazy loading dentro de un bucle
  const alumnos = await Alumno.findAll({ logging: contar });

  for (const alumno of alumnos) {
    await alumno.getCursos({ logging: contar });
  }

  console.log(`Lazy loading dentro de un bucle: ${consultas} consultas`);

  // Eager loading con include
  consultas = 0;

  await Alumno.findAll({ include: Curso, logging: contar });
  
  console.log(`Eager loading con include: ${consultas} consulta`);

  await sequelize.close();
})();
