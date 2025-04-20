
//  * condicionales 
const usuario = {
    nombre: 'carlos',
    edad: 17,
    pais: 'chile',
};

// * bloque if

if (usuario.pais === 'colombia') {  // condicionales if
    console.log('el usuario es colombiano');
} else if (usuario.pais === 'español') {
    console.log('el usuario es español');
} else if (usuario.pais === 'argentina') {
    console.log('el usuario es argentino');
} else if (usuario.pais === 'chile') {
    console.log('el usuario es chileno');
} else if (usuario.pais === 'peru') {
    console.log('el usuario es peruano');
}

// * bloque switch

switch (usuario.pais) { // condicional tipo switch
    case 'colombia':
        console.log('el usuario es colombiano');
        break;
    case 'españa':
        console.log('el usuario es español');
        break;
    case 'argentina':
        console.log('el usuario es argentino');
        break;
    default:
        console.log('el usuario es de otro pais');
}