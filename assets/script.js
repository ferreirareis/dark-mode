function mudarModo(){
    mudarClasses();
    mudarTexto();
}

function mudarClasses(){
    botao.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    document.querySelector(".moon-logo").classList.toggle("animate-moon");
}

function mudarTexto(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)) {
        botao.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON"
        return;
    }

    botao.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON"

}

const darkModeClass = 'dark-mode';
const botao = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


function mudarImagem(){
    document.querySelector(botao).addEventListener("click", () => {
    })
}

botao.addEventListener('click', mudarModo, mudarImagem);