module.exports = (sequelize, DataTypes) => {
    const Docente = sequelize.define('Docente', {
        nombre: { type: DataTypes.STRING, allowNull: false }
    }, { tableName: 'docentes' });
    Docente.associate = (models) => {
        Docente.hasMany(models.Curso, { foreignKey: 'docenteId' });
    };
    return Docente;
};