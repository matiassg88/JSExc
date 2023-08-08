/**
 * Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
circulo y lo muestre en el HTML.
 */
//raiz cuadrada =>r = A / π. para area

//r = per / (2*π)

var boton = document.getElementById("boton");
var area_input = document.getElementById("area");
var perimetro_input = document.getElementById("perimetro");
var resultado = 0;
console.log(area_input.isConnected);

function calcuRadio(){
    if (area_input === 'undefined' ) {
        resultado=perimetro_input/(2*Math.PI);
        console.log(resultado);
    }else{
        let r=area_input/Math.PI;
        resultado=Math.sqrt(r);
    }
}
boton.onclick=calcuRadio;
console.log(resultado);