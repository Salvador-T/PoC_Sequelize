const { sequelize, Alumno, Inscripcion } = require('../models');

(async () => {
  try {
    await sequelize.transaction(async (t) => {
      const luis = await Alumno.create(
        { nombre: 'Luis', email: 'luis@mail.com' },
        { transaction: t }
      );

      // El curso 999 no existe: la clave foránea hace fallar el INSERT
      await Inscripcion.create(
        { alumnoId: luis.id, cursoId: 999 },
        { transaction: t }
      );
    });
  } catch (e) {
    console.log('\nLa transacción falló:', e.name);
  }

  const luis = await Alumno.findOne({ where: { email: 'luis@mail.com' } });
  console.log('¿Luis quedó guardado?', luis ? 'Sí' : 'No, se hizo ROLLBACK');
  await sequelize.close();
})();
