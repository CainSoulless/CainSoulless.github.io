let openModal = document.querySelector(".modal");

function win() {
    document.querySelector(".modal__title").innerHTML = "¡Ganaste!"
    document.querySelector(".modal__img").src = "img/win.svg";
    document.querySelector(".modal__para").innerHTML = '¡Puedes seguir intentando o crear una lista nueva en el boton de "Agregar nueva palabra"!.';
    openModal.classList.add("modal--show"); 
}

function lose() {
    document.querySelector(".modal__title").innerHTML = "Vuelve a intentar."
    document.querySelector(".modal__img").src = "img/lose.svg";
    document.querySelector(".modal__para").innerHTML = '¡Puedes seguir intentando o crear una lista nueva en el boton de "Agregar nueva palabra"!.\nLa palabra secreta era: ' + secretWord.bold();
    openModal.classList.add("modal--show"); 
}

function desist() {
    document.querySelector(".modal__title").innerHTML = "¡No te preocupes!"
    document.querySelector(".modal__img").src = "img/desist.svg";
    document.querySelector(".modal__para").innerHTML = '¡Puedes seguir intentando o crear una lista nueva en el boton de "Agregar nueva palabra"!.\nLa palabra secreta era: ' + secretWord.bold();
    openModal.classList.add("modal--show"); 
}

function invalid() {
    document.querySelector(".modal__title").innerHTML = "¡Error!"
    document.querySelector(".modal__img").src = "img/error.svg";
    document.querySelector(".modal__para").innerHTML = "¡Recuerda que el maximo de 8 letras, y sin numeros!.";
    document.querySelector(".modal__close").innerHTML = "Volver a intentar";
    openModal.classList.add("modal--show"); 
}
