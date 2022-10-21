const tema = document.querySelector('#checkbox');
var body = document.querySelector('body')
var form = document.querySelector('form')
var titulo = document.querySelector('.titulo')
var tituloPrograma = document.querySelector('.titulo-programa')
var seletor = document.querySelector('#selecionador')
var indice = document.querySelector('#indice-escolha')
var label = document.querySelector('.label')
var tituloToggle = document.querySelector('#titulo-toggle');

tema.addEventListener('change', () => {
    body.classList.toggle('tema-escuro');
    form.classList.toggle('tema-escuro-form');
    titulo.classList.toggle('tema-escuro-titulo-p');
    tituloPrograma.classList.toggle('tema-escuro-titulo');
    seletor.classList.toggle('tema-escuro-seletor');
    indice.classList.toggle('tema-escuro-indice-cesar');
    label.classList.toggle('label-night');

    if(tema.checked == true) {
        tituloToggle.innerHTML = "Clique para ir ao tema claro";
    } else {
        tituloToggle.innerHTML = "Clique para ir ao tema escuro";

    }
})
