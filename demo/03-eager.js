import { sequelize, Alumno, Curso, Docente, Inscripcion } from '../models/index.js';

(async () => {
  const alumnos = await Alumno.findAll({
    where: { email: 'alumno1@mail.com' },
    include: {
      model: Curso,
      through: { attributes: ['estado'] }, // datos de la tabla intermedia (inscripcion)
      include: Docente // inclusión anidada
    }
  });

  console.log(JSON.stringify(alumnos, null, 2));
  await sequelize.close();
})();
