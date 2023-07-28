let listaDeCalculo = [];

function calcular() {
    validacaoDeCampo();

    let num1 = parseFloat(document.getElementById("campo1").value);
    let num2 = parseFloat(document.getElementById("campo2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado = document.getElementById("resultado");

    if (operacao === "somar") {
        listaDeCalculo.push(`${num1} + ${num2} = ${(num1 + num2)}`);
        resultado.innerHTML = (num1 + num2)
    } else if (operacao === "subtrair") {
        listaDeCalculo.push(`${num1} - ${num2} = ${(num1 - num2)}`);
        resultado.innerHTML = (num1 - num2)
    } else if (operacao === "multiplicar") {
        listaDeCalculo.push(`${num1} x ${num2} = ${(num1 * num2)}`);
        resultado.innerHTML = (num1 * num2)
    } else if (operacao === "dividir") {
        listaDeCalculo.push(`${num1} / ${num2} = ${(num1 / num2)}`);
        resultado.innerHTML = (num1 / num2)
    }
}


function listaCalculo() {

    const ulElement = document.getElementById('listaCalculo');

    ulElement.innerHTML = '';

    listaDeCalculo.forEach(calculo => {
        const liElement = document.createElement('li');
        liElement.textContent = calculo;
        ulElement.appendChild(liElement);
    });
}

function validacaoDeCampo() {
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
