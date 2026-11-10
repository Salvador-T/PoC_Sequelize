import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Inscripcion = sequelize.define('Inscripcion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estado: { 
        type: DataTypes.STRING, 
        defaultValue: 'activa' 
    }
}, {
    tableName: 'inscripciones'
});

export default Inscripcion;