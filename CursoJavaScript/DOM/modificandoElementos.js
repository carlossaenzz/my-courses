
/**
 * elemento.innerHTML 
 * nos permite cambiar el contenido de un elemento
 */
const primeraCaja = document.querySelector('.caja');
primeraCaja.innerHTML = 'carlos';


/**
 * elemento.attribute
 * nos permite acceder y cambiar atributos del elemento
 */
primeraCaja.id = 'nuevo-id'


/**
 * elemento.setAttribute()
 * nos permite agragar o establecer el valor de un atributo del elemento
 */
primeraCaja.setAttribute('class', 'caja activa');
primeraCaja.setAttribute('data-id', '123456');
