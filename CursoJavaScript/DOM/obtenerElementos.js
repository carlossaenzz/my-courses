
/**
 *  document.getElementById()
 *  nos permite obtener un elemento en base a su atributo id
 */
document.getElementById('contenedor1');
console.log(contenedor1);


/**
 *  children
 *  nos permite obtener los elementos hijo
 */
console.log(contenedor1.children);


/**
 *  parentElement()
 *  nos permite obtener el elemento padre de un elemento
 */
console.log(contenedor1.parentElement);

/**
 * getElementByTagName()
 * nos permite obtener un colección de elementos en base a la etiqueta
 */
let divs = document.getElementsByTagName ('div');
console.log(divs);
console.log(`tenemos ${divs.length} divs en la pagina`); // me dice cuantos divs hay en la pagina


/**
 * getElementsByClassName()
 * nos permite obtener una coloccion de elementos en base asu clase css
 * 
 */
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


/**
 * querySelector()
 * nos devuelve el primer elemento que conincida con un selector estilo css
 */
const caja = document.querySelector('#contenedor1 .caja');
console.log(caja);


/**
 * querySelectorAll()
 * nos permite obtener un caleccion de elementos en base a un selector estilo css
 */
const cajas = document.querySelectorAll('#contenedor1 .cajas');
console.log(cajas);

