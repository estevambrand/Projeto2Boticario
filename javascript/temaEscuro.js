const btnTemaEscuro = document.querySelector('.btnTemaEscuro');
const corpo = document.querySelector('.corpo');
const trocanome = document.querySelector('.tema__Escuro');

btnTemaEscuro.onclick = function(){
    this.classList.toggle("active")
    corpo.classList.toggle("active")
}


