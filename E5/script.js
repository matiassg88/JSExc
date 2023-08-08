

function calcular(){   
    var num11 = document.getElementById("num1").value;
    var num22 = document.getElementById("num2").value;
    var num1 = parseInt(num11);
    var num2 = parseInt(num22);
   
    let op = document.getElementById("op").value;
    
    let resultado=0;
    if(op==="+"){        
        resultado = num1+num2;
    }else if(op==="-"){
        resultado = num1-num2;
    }else if(op==="*"){
        resultado = num1*num2;
    }else if (op==="/"){
        resultado = num1/num2;
    };

    var divResultado = document.getElementById("resultado");
    divResultado.textContent = `Resultado: ${resultado}`;
};


