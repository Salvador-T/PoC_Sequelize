'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inscripciones', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      alumnoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'alumnos', key: 'id' },
        onDelete: 'CASCADE'
      },
      cursoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cursos', key: 'id' },
        onDelete: 'CASCADE'
      },
      estado: { type: Sequelize.STRING, defaultValue: 'activa' },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('inscripciones');
  }
};