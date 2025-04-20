
const agragarCaja = () => {

    // creamos elemento
    // createElement 
    const nuevaCaja = document.createElement('div');


    /**
     * agregamos textos y atributos
     */
    nuevaCaja.innerText = 'saenz';
    nuevaCaja.setAttribute('id', 'nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa');

    /**
     * agregamos el elemento al DOM
     */
    const contenedor = document.getElementById('contenedor1');

    // .appendChild() - agrega un elemento al final   
    contenedor.appendChild(nuevaCaja);
};

