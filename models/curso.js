module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
        nombre: { type: DataTypes.STRING, allowNull: false },
        nivel: { type: DataTypes.ENUM('A1', 'A2', 'B1', 'B2') },
        cupo: { type: DataTypes.INTEGER, defaultValue: 20 }
    }, { tableName: 'cursos' });
    Curso.associate = (models) => {
        Curso.belongsTo(models.Docente, { foreignKey: 'docenteId' });
        Curso.belongsToMany(models.Alumno, {
            through: models.Inscripcion,
            foreignKey: 'cursoId'
        });
    };
    return Curso;
};