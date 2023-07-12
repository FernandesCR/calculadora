function calcular() {
    validacaodecampo();

    var num1 = parseFloat(document.getElementById("campo1").value);
    var num2 = parseFloat(document.getElementById("campo2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado = document.getElementById("resultado");

    if (operacao === "somar") {
        resultado.innerHTML = (num1 + num2);
    } else if (operacao === "subtrair") {
        resultado.innerHTML = (num1 - num2);
    } else if (operacao === "multiplicar") {
        resultado.innerHTML = (num1 * num2);
    } else if (operacao === "dividir") {
        resultado.innerHTML = (num1 / num2);
    }
}

function validacaodecampo() {
    const campo1 = document.getElementById("campo1").value;
    const campo2 = document.getElementById("campo2").value;
    const operacao = document.getElementById("operacao").value;

    if (!campo1) {
        document.getElementById("campos1").style.display = "block";
    } else {
        document.getElementById("campos1").style.display = "none";
    }
    if (!campo2) {
        document.getElementById("campos2").style.display = "block";
    } else {
        document.getElementById("campos2").style.display = "none";
    }
    if (operacao === "operacao1") {
        document.getElementById("campos3").style.display = "block";
    } else {
        document.getElementById("campos3").style.display = "none";
    }
}
