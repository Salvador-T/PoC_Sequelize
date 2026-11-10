// models/index.js
import {sequelize} from '../config/database.js';
import Docente from './docente.js';
import Curso from './curso.js';
import Alumno from './alumno.js';
import Inscripcion from './inscripcion.js';

// --- ASOCIACIONES ---

// Docente <-> Curso (1 a N)
Docente.hasMany(Curso, {
  foreignKey: 'docenteId'
});
Curso.belongsTo(Docente, {
  foreignKey: 'docenteId'
});

// Alumno <-> Curso (N a N a través de Inscripcion)
Curso.belongsToMany(Alumno, {
  through: Inscripcion,
  foreignKey: 'cursoId'
});

Alumno.belongsToMany(Curso, {
  through: Inscripcion,
  foreignKey: 'alumnoId'
});

// Exportamos la conexión y todos los modelos listos para usar
export {
  sequelize,
  Docente,
  Curso,
  Alumno,
  Inscripcion
};