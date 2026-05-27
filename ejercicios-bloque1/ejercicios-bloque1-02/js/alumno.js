// Sin objeto (difícil de manejar):
const nombre = 'Ana';
const edad = 22;
const curso = 'JavaScript avanzado';
// Con objeto (todo junto y relacionado):
const alumno = {
    nombre: 'Ana',
    edad: 22,
    curso: 'JavaScript avanzado',
    activo: true
};
// Acceder a una propiedad:
console.log(alumno.nombre); // 'Ana'

export function crearTextoAlumno(alumno){
    const nombre= alumno.nombre;
    const edad=alumno.edad;
    const curso=alumno.curso;
    const frase=(nombre+" tiene "+edad+" y está matriculada en "+curso)
    return frase;
}