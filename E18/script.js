/**A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos */

var valores = [true, 5, false, "hola", "adios", 2];
var longitud = 0;
var suma=0, resta=0, multi=0, div=0, exp=0;

for (let variable of valores) {
    if (typeof variable === "string") {
        if (longitud<variable.length) {
            longitud=variable.length;
        }        
    }

   if (typeof variable === "boolean") {
    console.log(variable);
   }

   if (typeof variable == "number") {
   if (suma===0 && resta===0 && multi===0 && div===0 && exp===0) {
     suma = variable;
     resta = variable;
     multi = variable;
     div = variable;
     exp = variable;
   }else{
    suma += variable;
     resta -= variable;
     multi *= variable;
     div /= variable;
     exp %= variable;
   }
   }
}

console.log(`La longitud de la palabra mas larga es: ${longitud}
La suma de todos los number es: ${suma}
La resta de todos los number es: ${resta}
La multiplicacion de todos los number es: ${multi}
La division de todos los number es: ${div}
El valor módulo de todos los number es: ${exp}`);