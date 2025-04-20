function contieneNumeros () {
    let texto = document.getElementById('texto').value;
    let numeroPatron = /\d+/;
    let contieneNumeros = numeroPatron.test(texto);
    contieneNumeros ? document.getElementById('output').innerHTML = "El texto insertado contiene números":
    document.getElementById('output').innerHTML = "El texto no contine números";
}