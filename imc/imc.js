function calcularIMC() {
    const peso = parseFloat(document.getElementById("campo1").value);
    const altura = parseFloat(document.getElementById("campo2").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = (peso / (altura ** 2)).toFixed(2);
    resete()
}

function validacaoDosCampos() {
    const peso = parseFloat(document.getElementById("campo1").value);
    const altura = parseFloat(document.getElementById("campo2").value);

    isNaN(peso + altura) ? "" : calcularIMC();

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

function comparadorIMC() {
    const peso = parseFloat(document.getElementById("campo1").value);
    const altura = parseFloat(document.getElementById("campo2").value);

    let resultado = (peso / (altura ** 2)).toFixed(2);

    if (resultado <= 15) {
        document.getElementById("magreza").style.backgroundColor = "black";
    }
    else if (resultado <= 25) {
        document.getElementById("normal").style.backgroundColor = "black";
    }
    else if (resultado <= 30) {
        document.getElementById("sobrePeso").style.backgroundColor = "black";
    }
    else if (resultado <= 40) {
        document.getElementById("obesidade").style.backgroundColor = "black";
    }
    else if (resultado >= 41) {
        document.getElementById("obesidadeGrave").style.backgroundColor = "black";
    }
}  

function resete () {
    const peso = parseFloat(document.getElementById("campo1").value);
    const altura = parseFloat(document.getElementById("campo2").value);

    let resultado = (peso / (altura ** 2)).toFixed(2);

    if (resultado >= 0) {
        document.getElementById("magreza").style.backgroundColor = "";
        document.getElementById("normal").style.backgroundColor = "";
        document.getElementById("sobrePeso").style.backgroundColor = "";
        document.getElementById("obesidade").style.backgroundColor = "";
        document.getElementById("obesidadeGrave").style.backgroundColor = "";
        comparadorIMC()
    }    
}

function limparCampo() {
    const limpar = document.getElementsByName("campo")
    const peso = parseFloat(document.getElementById("campo1").value);
    const altura = parseFloat(document.getElementById("campo2").value);

    let resultado = (peso / (altura ** 2)).toFixed(2);

    if (resultado >= 0) {
        document.getElementById("magreza").style.backgroundColor = "";
        document.getElementById("normal").style.backgroundColor = "";
        document.getElementById("sobrePeso").style.backgroundColor = "";
        document.getElementById("obesidade").style.backgroundColor = "";
        document.getElementById("obesidadeGrave").style.backgroundColor = "";
    }   


    resultado.innerHTML = '';

    limpar.forEach(limpa => {
        limpa.value = '';
    })
}