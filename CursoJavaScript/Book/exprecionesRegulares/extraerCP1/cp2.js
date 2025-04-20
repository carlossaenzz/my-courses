function extraeCP() {
    let direccion = document.getElementById('texto').value;
    let cpPatron = /\d{6}/g; //necesitamos añadir g para evitar que se detenga en la primera coincidencia
    let cp = direccion.match(cpPatron);
    console.log(cp)
    if (!cp) {
        document.getElementById('output').innerHTML = 'El texto insertado no tiene un código postal';

    } else {
        document.getElementById('output').innerHTML = `El código postal es: ${cp}`;

    }
}