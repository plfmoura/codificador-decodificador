// Seletor de Range (input)

const rangeSlider = document.querySelector('.indice-cesar')
rangeSlider.style.visibility = "hidden";

const indiceSlider = document.querySelector('#indice');
const indiceValue = document.querySelector('.indice-value');
indiceValue.textContent = indiceSlider.value;
indiceSlider.oninput = function() {
    indiceValue.textContent = this.value;
}

//botao de copiar texto
const btnCopiado = document.querySelector('#btn-copiar')
const textoResultado = document.querySelector('#texto-final');

btnCopiado.addEventListener('click', () => {
    textoCopiar = textoResultado.value;
    console.log(textoCopiar);

    navigator.clipboard.writeText(textoCopiar).then(() => {
        btnCopiado.classList.remove('btn-warning');
        btnCopiado.classList.add('btn-success');
    })
});

// SELECIONADOR DE TIPO, E RADIO BOTOES CODE E DECODE

var selecionador = document.querySelector('.form-select');
const loader = document.querySelector('#carregando');
const btnFuncao = document.querySelector('#btn-funcao')

selecionador.addEventListener('click', () => {
    let selecionado = document.querySelector('input[name="radioBtn"]:checked')
    let disabled = document.querySelector('input[name="radioBtn"]:enabled')

    if(selecionador.value === "cesar"){
        selecionador.value = "cesar"
        rangeSlider.style.visibility = "visible";
        loader.style.visibility = 'hidden'
        btnFuncao.classList.remove('btn-primary', 'btn-success')
        btnFuncao.classList.add('btn-secondary');
        btnFuncao.innerHTML = "Selecione Ação"

    } else if (selecionador.value === "base") {
        selecionador.value = "base"
        rangeSlider.style.visibility = "hidden";
        loader.style.visibility = 'hidden'
        btnFuncao.classList.remove('btn-primary', 'btn-success')
        btnFuncao.classList.add('btn-secondary');
        btnFuncao.innerHTML = "Selecione Ação";

    } else {
        selecionador.value = "none"
        loader.style.visibility = 'visible'
        rangeSlider.style.visibility = "hidden";
        btnFuncao.classList.remove('btn-primary', 'btn-success')
        btnFuncao.classList.add('btn-secondary');
        btnFuncao.innerHTML = "Selecione Tipo";
    }

})

//Botoes de Radio \/

var radioCodificar = document.querySelector('#radioCodificar')
var radioDecodificar = document.querySelector('#radioDecodificar')

/* método para alterar checkeds dos radios btns*/
let radioBtn = document.querySelectorAll('input[name="radioBtn"]');

let achandoSelecionado = () => {
    let selecionado = document.querySelector('input[name="radioBtn"]:checked').value;
}

radioBtn.forEach(radioBtn => {
    radioBtn.addEventListener('change', achandoSelecionado);
});


var verificarCodificar = radioCodificar.checked; 
var verificarDecodificar = radioDecodificar.checked;

function trocarBtnCodificar() {
    btnFuncao.classList.remove('btn-secondary', 'btn-primary')
    btnFuncao.classList.add('btn-success');
    btnFuncao.innerHTML = "Codificar"
}

function trocarBtnDecodificar() {
    btnFuncao.classList.remove('btn-secondary', 'btn-success')
    btnFuncao.classList.add('btn-primary');
    btnFuncao.innerHTML = "Decodificar"
}

// BASE 64 E CESAR CODIFICAR E DECODIFICAR
var btnAcao = document.querySelector("#btn-funcao");
var indiceDeslocamento = parseInt(indiceSlider.value);


btnAcao.addEventListener('click', () => {
    var texto = document.getElementById("texto-inicial");
    var resultado = document.getElementById('texto-final')

    //codificar base
    if(verificarCodificar = radioCodificar.checked && selecionador.value == "base" ){

            let texto = document.getElementById("texto-inicial");
            let resultado = document.getElementById('texto-final')
            resultado.value = btoa(texto.value); 
            texto.value = "";
            btnCopiado.classList.remove('btn-success');
            btnCopiado.classList.add('btn-warning');
    
    //decodificar base
    } else if(verificarDecodificar = radioDecodificar.checked && selecionador.value == "base"){
        
            let texto = document.getElementById("texto-inicial");
            let resultado = document.getElementById('texto-final');
            resultado.value = atob(texto.value);
            texto.value = "";
            btnCopiado.classList.remove('btn-success');
            btnCopiado.classList.add('btn-warning');
    
    //Codificar Cesar
    } else if(verificarCodificar = radioCodificar.checked && selecionador.value == "cesar"){

        var textoOriginal = document.querySelector('#texto-inicial')
        var textoSaida = document.querySelector('#texto-final')

        resultado.value = "";
    
        textoOriginal = textoOriginal.value.toUpperCase()
    
        for(var i = 0; i < textoOriginal.length; i++) {
            var codigoLetra = textoOriginal.charCodeAt(i) - 65
            var deslocamento = (codigoLetra + indiceDeslocamento) % 26
    
            deslocamento += 65
    
            textoSaida.value += String.fromCharCode(deslocamento)
    
        }
        texto.value = "";
        btnCopiado.classList.remove('btn-success');
        btnCopiado.classList.add('btn-warning');

    } else if(verificarDecodificar = radioDecodificar.checked && selecionador.value == "cesar"){
        
        var textoOriginal = document.querySelector('#texto-inicial')
        var textoSaida = document.querySelector('#texto-final')

        resultado.value = "";

        textoOriginal = textoOriginal.value.toUpperCase()

        for(var i = 0; i < textoOriginal.length; i++) {
            var codigoLetra = textoOriginal.charCodeAt(i) - 65
            var deslocamento = (codigoLetra + -indiceDeslocamento) % 26

            console.log(codigoLetra)
            console.log(deslocamento)
            deslocamento += 65

            textoSaida.value += String.fromCharCode(deslocamento)

        }
        texto.value = "";
        btnCopiado.classList.remove('btn-success');
        btnCopiado.classList.add('btn-warning');
    } else if(selecionador.value == "none"){
        alert('escolhar um tipo e uma ação')
    }
});

