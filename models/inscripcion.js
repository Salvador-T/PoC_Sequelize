module.exports = (sequelize, DataTypes) => {
    const Inscripcion = sequelize.define('Inscripcion', {
        estado: { type: DataTypes.STRING, defaultValue: 'activa' }
    }, { tableName: 'inscripciones' });
    return Inscripcion;
};