import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Curso = sequelize.define('Curso', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nivel: { 
        type: DataTypes.ENUM('A1', 'A2', 'B1', 'B2') 
    },
    cupo: {
        type: DataTypes.INTEGER,
        defaultValue: 20
    }
}, {
    tableName: 'cursos'
});

export default Curso;
