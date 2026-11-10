'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const ahora = new Date();
    const fechas = { createdAt: ahora, updatedAt: ahora };
    // 1. Insertamos 2 docentes
    await queryInterface.bulkInsert('docentes', [
      { nombre: 'Laura Gómez', ...fechas },
      { nombre: 'Martín Ruiz', ...fechas }
    ]);
    // 2. Insertamos 3 cursos
    await queryInterface.bulkInsert('cursos', [
      { nombre: 'Inglés inicial', nivel: 'A1', docenteId: 1, ...fechas },
      { nombre: 'Inglés intermedio', nivel: 'B1', docenteId: 1, ...fechas },
      { nombre: 'Conversación', nivel: 'B2', docenteId: 2, ...fechas }
    ]);
    // 3. Generamos e insertamos 20 alumnos
    const alumnos = Array.from({ length: 20 }, (_, i) => ({
      nombre: `Alumno ${i + 1}`,
      email: `alumno${i + 1}@mail.com`,
      ...fechas
    }));
    await queryInterface.bulkInsert('alumnos', alumnos);
    // 4. Inscribimos a cada alumno en uno o dos cursos
    const inscripciones = alumnos.flatMap((_, i) => {
      const filas = [{ alumnoId: i + 1, cursoId: (i % 3) + 1, ...fechas }];
      if (i % 2 === 0) {
        filas.push({ alumnoId: i + 1, cursoId: ((i + 1) % 3) + 1, ...fechas });
      }
      return filas;
    });
    await queryInterface.bulkInsert('inscripciones', inscripciones);
  },
  async down(queryInterface) {
    // Si queremos deshacer, borramos en orden inverso
    await queryInterface.bulkDelete('inscripciones', null, {});
    await queryInterface.bulkDelete('alumnos', null, {});
    await queryInterface.bulkDelete('cursos', null, {});
    await queryInterface.bulkDelete('docentes', null, {});
  }
};