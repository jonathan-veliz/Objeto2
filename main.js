console.log("Objetos");
console.log("Ejercicio 1")
/*Hacer una función que reciba un objeto e imprima por consola ’$Nombre, $Apellido’.

Ejemplo: 
INPUT: {
	nombre: ‘Leonel’,
	apellido: ‘Messi’,
	profesion: ‘futbolista’
}
OUTPUT: `Leonel, Messi`
 */

const jugador ={
    nombre: "Leonel",
    apellido: "Messi",
    profesion: "Futbolista",

}

function nombreCompleto(jugador){
    return `${jugador.nombre}, ${jugador.apellido}`
}
console.log(nombreCompleto(jugador));

console.log("Ejercicio 2");
/*
Hacer una función que reciba un objeto como parámetro y escriba la propiedad ‘color’, como rojo.


Ejemplo: 
INPUT: {
	marca: ‘fiat’,

$	modelo: ‘uno’,
}
OUTPUT: {
	marca: ‘fiat’,
	modelo: ‘uno’,
	color: ‘rojo’
} */

function vehiculo(auto){
    auto.color = "rojo";
    return auto;

}
const auto ={
    marca: "Fiat",
    modelo: "Uno"
}
console.log(vehiculo(auto))

console.log("Ejercicio 3");
/*// Definir la función presentarse()

const persona = { 
	nombre: "Juan", 
	edad: 30, 
presentarse: () => …
 };
 // Prueba del ejercicio 1 console.log(persona.presentarse()); // Salida esperada: "Hola, mi nombre es Juan y tengo 30 años." */
 const persona = { 
	nombre: "Juan", 
	edad: 30, 
presentarse: () => {return `Hola , mi nombre ${persona.nombre} y tengo ${persona.edad} años.`
}

 };
 console.log(persona.presentarse())

 console.log("Ejercicio 4");
 /*// Definir función ‘sumarPesos’ que recibe un array de objetos ‘autos’ y me devuelva la suma de todos los pesos.

Ej: let autos: [
	{marca: ‘fiat’, modelo: ‘uno’, peso:1200},
	{marca: ‘toyota’, modelo: ‘hilux’, peso:2000},
	{marca: ‘ford’, modelo: ‘fiest’, peso:1300},
] */

const autos= [
	{marca: "fiat", modelo: "uno", peso:1200},
	{marca: "toyota", modelo: "hilux", peso:2000},
	{marca: "ford", modelo: "fiest", peso:1300},
]
function sumaTotal(auto){
    let suma=0;
   
    auto.forEach((auto)=> { suma= suma + auto.peso})
     return suma;   
}



console.log(sumaTotal(autos));

console.log("Ejercicio 5");
/*Crea un objeto llamado "alumno" con propiedades como nombre, edad y dirección. Luego, dentro del objeto "alumno", agrega otro objeto llamado "contacto" con propiedades como email y teléfono. */

const alumno ={
    nombre: "Jonathan",
    edad : 30,
    direccion: "San ramon 2819",
    contacto:{
        email: "joniveliz1993@gmail.com",
        telefono: 1160419235

    }
}

console.log(alumno)

console.log("Ejercicio 6");
/* Crea un objeto llamado "pelicula" con propiedades como título, director y año.  Luego, utiliza Object.values() para recorrer todos los valores del objeto y mostrarlas en la consola.*/
const pelicula ={
    titulo: "La vida es bella",
    director:"Roberto Benigni",
    anio: 1997
}
    

Object.values(pelicula).forEach((elemento) =>console.log(elemento));
console.log("Ejercicio 7");
/*Crear un objeto llamado "rectangulo" con propiedades "base" y "altura". Agrega un método llamado "calcularArea" que devuelva el área del rectángulo. (Area x Altura) */
const rectangulo={
    base: 22,
    altura:22,
    calcularArea: () =>{ return rectangulo.base * rectangulo.altura}
}
console.log(rectangulo.calcularArea());

console.log("Ejercicio 8");
/*Crear un objeto que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones.

Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Juan 8 */
/*
const alumnos = {};
alumnos.nombre=prompt("Ingrese su nombre");
alumnos.ingles=parseInt(prompt("Ingrese la nota de ingles"));
alumnos.programacion = parseInt(prompt("Ingrese la nota de programacion"));
alumnos.HTML = parseInt(prompt("Ingrese la nota de HTML"));
alumnos.promedio=(alumnos.ingles+alumnos.HTML+alumnos.programacion)/3; 
*//*
console.log(alumnos)*/
console.log("Ejercicio 9");
/*
Define un objeto, mediante una expresión, que tenga dos propiedades: precio y descuento y una función neto. El método calculará el precio con el descuento aplicado. 
 */

const remera ={
    precio:2500,
    descuento: 15,
    neto : () => { return remera.precio *remera.descuento/100}
}
console.log(remera.neto())