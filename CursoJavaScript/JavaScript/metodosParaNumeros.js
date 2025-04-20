

/*
    .toStrings()
*/
const numero = 10;
console.log(numero, typeof numero);

const texto = numero.toString();
console.log(texto, typeof texto);


/*
    .toFixed()
*/
const numero1 = 3.123456789;
console.log(numero1.toFixed(14));


/*
    .parseInt() intenta transformar un valor en un entero
*/
const numero2 = parseInt(prompt('escribe un numero'))
const numero3 = parseInt(prompt('escribe un numero'))
console.log(numero2 + numero3);


/*

    .parseFloat() intenta transformar un valor en un numero con decimal
*/
const numero4 = parseFloat(prompt('escribe un numero'))
const numero5 = parseFloat(prompt('escribe un numero'))
console.log(numero4 + numero5);

