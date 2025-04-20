let direccion = 'kennedy Bomberos 110851 kennedy';
let cpPatron = /\d{6}/;
let cp = direccion.match(cpPatron);
console.log(cp);
document.getElementById('output').innerHTML = `El cp e: ${cp}`;