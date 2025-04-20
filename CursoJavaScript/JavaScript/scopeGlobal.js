
// * variables globales
var nombre = 'carlos';  // variable global
console.log(nombre);

const saludo = () => { // funcion
    console.log('hola ' + nombre);  // desde dentro de nuestra funcion podemos acceder a las variables globales

    nombre = 'arturo';
    console.log('el nuevo nombre es: ' + nombre)
};
saludo();

