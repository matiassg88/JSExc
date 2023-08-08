

function verificar(){
let num=document.getElementById("num").value;
let numero=parseInt(num);

let res= num % 2;
console.log(res);

let resultado=document.getElementById("resultado");

if(numero===0 ){
    resultado.textContent=`${num} No es par ni impar segun dicen.`
return null;
}else if(res===0 ){
    resultado.textContent=`${num} No es impar.`
}else if(res===1 /*&& event.keyCode===13*/){
    resultado.textContent=`${num} No es par.`
}

}
//otra forma de programar el evento del boton que no sea llamando desde el atributo de la etiqueta input
document.getElementById("verificador").onclick = verificar ;
//esto es para apretar enter en el input
document.getElementById("num").addEventListener("keyup", function(event){
    if(event.keyCode===13){
        verificar()
    }
});