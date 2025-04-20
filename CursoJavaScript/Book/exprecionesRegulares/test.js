let texto = "ape5";
// let patron = /[aeiou]\d/g;
let patron = /[aeiou]\\.\d/;
let correspondeApatron = patron.test(texto);
console.log(correspondeApatron);