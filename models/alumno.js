module.exports = (sequelize, DataTypes) => {
    const Alumno = sequelize.define('Alumno', {
        nombre: { type: DataTypes.STRING, allowNull: false },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true }
        }
    }, { tableName: 'alumnos' });

    Alumno.associate = (models) => {
        Alumno.belongsToMany(models.Curso, {
            through: models.Inscripcion,
            foreignKey: 'alumnoId'
        });
    };

    return Alumno;
};