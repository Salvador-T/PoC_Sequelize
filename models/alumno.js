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
    tableName: 'alumnos' // Para forzar el nombre en la tabla
});

export default Alumno; // Exportacion por defecto para no tener que poner {Alumno}
