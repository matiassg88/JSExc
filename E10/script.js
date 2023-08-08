/**
 *10
var palabra = prompt("ingreser una palabra");

var palabraAlRe = palabra => palabra.split("").reverse().join("");

alert(palabraAlRe(palabra)); 
 */

/**
 * 11
 * Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”

var frase= prompt("ingrese una...");
var maslarg=palabraMasLarga (frase);
alert(maslarg[maslarg.length-1]);

function palabraMasLarga (frase){

    var palabras = frase.split(" ");
    palabras.sort(function(a, b) {
        return a.length - b.length; // Ordenar de menor a mayor longitud
      });
    return palabras;

}

11.2 Sabri
var frase = prompt("Ingrese una frase:");

function palabraMasLarga(frase) {
 
  var palabras = frase.split(" ");
  var palabraMasLarga = palabras[0];

 
  for (var i = 1; i < palabras.length; i++) {
    if (palabras[i].length > palabraMasLarga.length) {
      palabraMasLarga = palabras[i];
    }
  }

  return palabraMasLarga;
}

var palabraLarga = palabraMasLarga(frase);
alert.(palabraLarga);

11.3 Sole
*/
// function palabraMasLarga(cadena) {
//     var palabras = cadena.split(' ');
//     var palabraMasLarga = '';
    
//     for (var palabra of palabras) {
//       if (palabra.length > palabraMasLarga.length) {
//         palabraMasLarga = palabra;
//       }
//     }
  
//     return palabraMasLarga;
//   }
//   var cadenaEjemplo = "realmente es una guia de JavaScript";
//   var resultado = palabraMasLarga(cadenaEjemplo);
//   console.log(resultado);
 



/**
 * 12
 */
//  var tipodeDato = variable => alert (typeof variable);
//   tipodeDato(prompt("ingrese algo"));
 

/**
 * 13
 * Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
 * 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.
*/

/*13.1
var persona = new Object();
Persona.nombre = "Matias";
Persona.edad = 34;
Persona.sexo = "bueno dale";
Persona.peso = 77;
Persona.altura = 1.71;
13.2
var persona = {
nombre : "Matias",
edad : 34,
sexo : "bueno dale",
peso : 77,
altura : 1.71,
}
console.log(persona);
13.3
function Persona (nombre, edad, sexo, peso, altura){
this.nombre=nombre;
this.edad=edad;
this.sexo=sexo;
this.peso=peso;
this.altura=altura;
}
var persona = new Persona ("Matias", 34, "si", 77, 1.71);
console.log(persona);

*/13.4
// class Persona {
// nombre;
// edad;
// sexo;
// peso;
// altura;
// };
// var persona = new Persona ();
// persona.nombre = "Matias";
// persona.edad = 34;
// persona.sexo = "bueno dale";
// persona.peso = 77;
// persona.altura = 1.71;
// console.log(persona);




