import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Alumno = sequelize.define('Alumno', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
    }
}, {
    tableName: 'alumnos'
});

export default Alumno;
