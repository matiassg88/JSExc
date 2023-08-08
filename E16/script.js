/**
 * Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
    y los muestre por pantalla.
 */
var div1Vector = document.getElementById("vector1");
var div2Vector = document.getElementById("vector2");

var vector1 = [];
var vector2 = [];

for (var i = 0; i < 5; i++) {
    vector1[i]=parseInt(Math.random()*100);
    vector2[i]=parseInt(Math.random()*100);
}

const nuevoH1=document.createElement("h1");//crea elemento
var contenido= document.createTextNode("Vector 1")//creea contenido que llevara el elemento
nuevoH1.appendChild(contenido);//agrega el contenido al elemento
document.body.insertBefore(nuevoH1,div1Vector);//coloca el nuevo elemento antes de otro

vector1.forEach((vec,j)=> {
    div1Vector.innerHTML += `${j} = ${vec} <br>`;
})

const nuevoH2=document.createElement("h1");//crea elemento
contenido= document.createTextNode("Vector 2")//creea contenido que llevara el elemento
nuevoH2.appendChild(contenido);//agrega el contenido al elemento
document.body.insertBefore(nuevoH2,div2Vector);//coloca el nuevo elemento antes de otro

vector2.forEach((vec,j)=> {
    div2Vector.innerHTML += `${j} = ${vec} <br>`;
})
