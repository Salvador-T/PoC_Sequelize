import {DataTypes} from 'sequelize';
import {sequelize} from '../config/database.js';

export const Docente = sequelize.define('Docente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }
}, {
    tableName: 'docentes'
});

export default Docente;
