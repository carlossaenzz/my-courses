
const usuario = {
    edad: 17,
    pais: 'colombia',
    ticket: true,
};

// * condicionales
if (usuario.edad >= 18) { // <--condicional if
    console.log('el usaurio es mayor de edad, puede entar al concierto');
} else {  // con palabra else podemos definir un bloue y dentro del el blque podemos anidar para cuando la condicion no se cumpla
    console.log(' el usuario es menor de edad no puede entrar');
};

// * ejemplo # 2

const usuario2 = {
    edad: 17,
    pais: 'colombia',
    ticket: false,
};

if (usuario2.edad >= 18) {
    if (usuario.ticket) {   // condicionales dentro de condicionales if
        console.log('el usuario es mayor de edad y tiene ticket');
    } else {
        console.log('el usuario es mayor de edad y no tiene ticket');
    }
} else {
    console.log(' el usuario es menor de edad');
};
