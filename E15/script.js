/**
 * Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario
 */

var rad = document.getElementById("radio");
var pi = Math.PI;
console.log(rad);

function calcArea (){
    let res =pi*Math.pow(rad.value ,2);
    document.getElementById("resultado").textContent = "Area = "+ res;
}

function calcPerimetro(){
    let res = 2*pi*rad.value;
    
    console.log(res);
    document.getElementById("resultado").textContent = `Perimetro = ${res}`;
}

function borrar(){
    document.getElementById("radio").value="";
}

document.getElementById("calc-area").onclick = calcArea;
document.getElementById("calc-perimetro").onclick = calcPerimetro;
document.getElementById("reset").onclick = borrar;