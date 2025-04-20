
// * Objetos
const personaArreglo = ['carlos', 30, 'carlitos saenz@gmainl.com', true, true]; // Arreglo ( Arrays )

const persona = {  // variable que pasa a ser un objetos por contener propiedades y valores
    nombre: 'carlos', // esta son propiedades mas valores | nombre: 'carlos', |
    apellido: 'saenz',
    estadoCivil: 'soltero',
    edad: 30,
    correo: 'correo@correo.com',
    suscripciones: {  // objetos dentro de objetos es valido 
        Web:true,
        correo: true
    },
    coloresFaforitos:['verde', 'rojo', 'negro', 'morado', 'azul', 'naranja', 'rosado', 'fuczia'], // Arreglo ( Arrays)
    saludo: function() {  //  también podemos guardar funciones
        alert('hola mundo!');   // las funciones dentro de objetos se les conoce como metodos
    },
};

console.log(persona.suscripciones);
console.log(persona['coloresFaforitos']);

const variable = 'suscripciones';
console.log(persona[variable]);

persona.saludo(); // de esta forma imprimo en pantalla el saludo de la funcion