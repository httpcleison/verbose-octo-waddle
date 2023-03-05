let ul = document.querySelector('nav ul')
let menuButton = document.querySelector('.menu-btn i')

function abrirMenu(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open')
    } else{
        ul.classList.add('open')
    }
}