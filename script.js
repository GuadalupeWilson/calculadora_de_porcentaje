function calcularPorcentaje() {
    var num = parseFloat(document.getElementById('num').value);
    var porcentaje = parseFloat(document.getElementById('porcentaje').value);
    if (isNaN(num)) {
        num = 0;
    }
    if (isNaN(porcentaje)) {
        porcentaje = 0;
    }
    var resultado = num - (num * porcentaje / 100); // Resta el porcentaje al número original
    document.getElementById('resultado').value = resultado;
}
