
function sum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num11 = parseInt(num1);
    let num22 = parseInt(num2);
    alert("El resultado es: " + (num11 + num22));
};

function difference() {
    let num1 = document.getElementById("num3").value;
    let num2 = document.getElementById("num4").value;
    let num11 = parseInt(num1);
    let num22 = parseInt(num2);
    alert("El resultado es: " + (num11 - num22));
};

function product() {
    let num1 = document.getElementById("num5").value;
    let num2 = document.getElementById("num6").value;
    let num11 = parseInt(num1);
    let num22 = parseInt(num2);
    alert("El resultado es: " + (num11 * num22));
}

function quotient() {
    let num1 = document.getElementById("num7").value;
    let num2 = document.getElementById("num8").value;
    let num11 = parseInt(num1);
    let num22 = parseInt(num2);
    alert("El resultado es: " + (num11 / num22));
}
