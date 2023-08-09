/**
 * Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
circulo y lo muestre en el HTML.
 */
//raiz cuadrada =>r = A / π. para area

//r = per / (2*π)

var boton = document.getElementById("boton");
var area_input = document.getElementById("area");
var perimetro_input = document.getElementById("perimetro");


boton.onclick=calcuRadio;

function calcuRadio(){
    var resultado = 0;
    var parr_peri;
    var parr_area;

    if (area_input.value === '' ) {
        resultado=perimetro_input.value/(2*Math.PI);
        parr_peri=`el radio es: ${resultado} utilizando el valor del perimetro.`
    }else{
        let r=area_input.value/Math.PI;
        resultado=Math.sqrt(r);
        parr_area=`el radio es: ${resultado} utilizando el valor del area.`
    }
    var p = document.createElement('p');
    if (typeof parr_peri !== 'undefined') {
        p.textContent = parr_peri;
    } else if (typeof parr_area !== 'undefined') {
        p.textContent = parr_area;
    }

    
    document.body.appendChild(p);
}


