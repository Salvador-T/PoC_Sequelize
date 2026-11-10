'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cursos', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      nombre: { type: Sequelize.STRING, allowNull: false },
      nivel: { type: Sequelize.ENUM('A1', 'A2', 'B1', 'B2') },
      cupo: { type: Sequelize.INTEGER, defaultValue: 20 },
      docenteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'docentes', key: 'id' },
        onDelete: 'CASCADE'
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('cursos');
  }
};