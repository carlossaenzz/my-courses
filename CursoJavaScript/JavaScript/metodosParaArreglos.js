
// * metodos para arreglos
const colores = ['azul', 'verde', 'rojo',]; // un arreglo es un tipo de dato donde se pueden guardar varios valores

/* 
    .length   
    (propiedad) => nos permite conocer la cantidad de elementos de un arreglo
    
*/
console.log(colores.length);

/* 
    .toString()   
    (propiedad) => nos permite transformar un arreglo a una cadena de texto

*/

// document.body.innerHTML = me permite mostrar en la pagina 
document.body.innerHTML = colores.toString();


/* 
    .join()
    (propiedad) => nos permite transformar un arreglo a una cadena de texto y separar los elementos 

*/
console.log(colores.join('----'));

/*
    .sort()
    (propiedad) => nos permite ordenar un arreglo de cadena de texto, de forma alfabetica


*/
const letras = ['c', 'b', 'd', 'a', 'f', 'e', 'h', 'g'];
console.log(letras.sort());

const numeros = [5, 3, 1, 4, 2, 6, 9, 8, 7,];
console.log(numeros.sort());

/*
    .reverse()
    (propiedad) => nos permite ordenar un arreglo de forma desendente

*/
console.log(letras.reverse());
console.log(numeros.reverse());

/*
    .concat()
    nos permite agrupar dos arrelgos en uno

*/
const arreglo1 = [1, 2, 3, 4, 5];
const arreglo2 = ['a', 'b', 'c', 'd', 'f'];
const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3);

/*
    .push()
    nospermite agregar un elemento al final de un arreglo

*/
colores.push('rosado');
console.log(colores);

/*
    .pop()
    nos permite elimaniar el ultimo elemento de un arreglo

 */
colores.pop();
console.log(colores);

/*
    .shift()
    elimina el primer elemento de un arreglo y recorre los elementos

 */
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado',];
// const diaEliminado = dias.shift();
// console.log(diaEliminado);
console.log(dias[0]);

/*
    .unshift('')
    agrega un elmento al inico de arreglo y empuja los elementos

*/
dias.unshift('carlos');
console.log(dias);

