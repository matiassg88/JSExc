/**Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
amarillo, por ejemplo) */
var parrafo = document.getElementById("parrafo");
var parrafoContenido = parrafo.textContent;
var parrafoArray = parrafoContenido.split(' ');
var contenidoNuevo='';

console.log(parrafoArray.length);

parrafoArray.forEach(element => {

    if (element.length>8 /*&& element.charAt(element.length-1)!='.' && element.charAt(element.length-1)!=','*/) {     
        element=`<span style="background-color:yellow">${element}</span>`; 
        
    }
    contenidoNuevo+=element+" "
});

parrafo.innerHTML=contenidoNuevo;
span=document.span;
//span.style.backgroundColor='yellow';
