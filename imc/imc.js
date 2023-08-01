function calcularIMC() {
    const peso = parseFloat(document.getElementById("campo1").value);
    const altura = parseFloat(document.getElementById("campo2").value);
    const resultado = document.getElementById("resultado"); 

    resultado.innerHTML = (peso / (altura ** 2)).toFixed(2);
}

function validacaoDosCampos() {
    const peso = parseFloat(document.getElementById("campo1").value);
    const altura = parseFloat(document.getElementById("campo2").value);

    if (peso) {
        isNaN(peso + altura) ? "" : calcularIMC();
    }
    if (!peso) {
        document.getElementById("campoz1").style.display = "block";
    } else {
        document.getElementById("campoz1").style.display = "none";
    }  
    if (!altura) {
        document.getElementById("campoz2").style.display = "block";
    } else {
        document.getElementById("campoz2").style.display = "none";
    }
}