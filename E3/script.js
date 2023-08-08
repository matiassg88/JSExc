function verificar(){

    var edad1=document.getElementById("edad").value;

    var edad=parseInt(edad1, 10);

    if(edad<18){
        alert("Usted es menor, sera redirigido");
        
        setTimeout(function() {
            window.location.href = "https://www.google.com/";
          }, 1000); // 3000 milisegundos = 3 segundos
        
        
    }else{
        alert("Bienvenido");
    }

}