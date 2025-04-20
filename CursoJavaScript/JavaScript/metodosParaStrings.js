
// * metodos para strings
const texto = 'hola mundo soy carlos';

/*
    .length
    devuelve el número de caracteres de una cadena de texto

*/
console.log(texto.length);


/* 
    .indexOf() .lastIndexOf() devuelve el index del primero y untimo caracter especificado

*/
const texto1 = 'hola mundo soy carlos';
console.log(texto1.indexOf('o'));
console.log(texto1.lastIndexOf('o'));


/* 
    .slice() devuelve un fracmento de una cadena de texto

*/
const texto3 = 'hola mundo';
const index = texto3.indexOf('m')
console.log(texto3.slice(index));


