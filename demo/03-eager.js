const { sequelize, Alumno, Curso, Docente } = require('../models');

(async () => {
  const alumnos = await Alumno.findAll({
    where: { email: 'alumno1@mail.com' },
    include: {
      model: Curso,
      through: { attributes: ['estado'] }, // datos de la tabla intermedia
      include: Docente // inclusión anidada
    }
  });

  console.log(JSON.stringify(alumnos, null, 2));
  await sequelize.close();
})();
