var numLimit = parseInt(prompt("Ingrese un valor"));

var n=0;

do {
    n+= parseInt(prompt("ingrese otro"));    
    console.log(n);
} while ( n<=numLimit);
alert("ganaste");

/**
 * var num3=parseInt(0);

function comparar(){
var num1 = document.getElementById("num1").value;
num1=parseInt(num1);
console.log(num1);  
if (num3<num1){
let num2 = document.getElementById("num2").value;
num2=parseInt(num2);
console.log(num2);
num3=num3+num2;
console.log(num3);
console.log(num1);
} 
if (num3>=num1) {
let msj = document.getElementById("msj");
msj.innerHTML="Ha superado el numero inicial";
var boton3 = document.createElement('button');
boton3.innerHTML="jugar de nuevo";
boton3.setAttribute("id", "boton3");
document.body.appendChild(boton3);
document.getElementById("boton3").onclick=reset;
}
}

function reset(){
location.reload();
}


 */