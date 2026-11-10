import { sequelize, Alumno } from '../models/index.js';

(async () => {
  // CREATE: Sequelize genera el INSERT
  const ana = await Alumno.create({ nombre: 'Ana', email: 'ana@mail.com' });

  // UPDATE con Active Record: el objeto se guarda a sí mismo
  ana.nombre = 'Ana María';
  await ana.save();

  // Validación: un email inválido nunca llega a la base
  try {
    await Alumno.create({ nombre: 'Prueba', email: 'esto-no-es-un-mail' });
  } catch (e) {
    console.log('\nRechazado por validación:', e.errors[0].message);
  }

  // DELETE
  await ana.destroy();
  await sequelize.close();
})();
