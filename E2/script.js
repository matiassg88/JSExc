function calcular() {
    // Obtener el valor del radio ingresado por el usuario
    var radio = parseFloat(document.getElementById("radio").value);

    // Calcular el área y el perímetro de la circunferencia
    var area = Math.PI * Math.pow(radio, 2);
    var perimetro = 2 * Math.PI * radio;

    // Actualizar el contenido de los <span> con los resultados
    document.querySelector('.area').innerText = area.toFixed(2);
    document.querySelector('.perimetro').innerText = perimetro.toFixed(2);




}