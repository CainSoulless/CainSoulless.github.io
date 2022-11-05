let words = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "LATAM", "COMPUTAR", "CAFE", "TECH", "CLOUD", "TECLADO", "PROGRAMADOR", "CIBERSEGURIDAD", "INFRAESTRUCTURA", "ESTUDIAR", "FUNCION", "VARIABLE"];
let secretWord = "";
let wordLen = 0;
let usedKeyList = [];
// counter for correct attempts
let correctAttemps = 0;
let correctList = [];
// counter for incorrect attempts
let incorrectAttemps = 0; 
let incorrectList = [];

let addedWord = "";
addedWord = sessionStorage.getItem('added');
let canvasEl = document.getElementById("myCanvas");
let table = canvasEl.getContext("2d");

// Show and hidde elements in the page lobby 
function lobbyGame(disp) {
    Array.prototype.forEach.call(document.getElementsByClassName("buttons"), function(el){
        el.style.display = disp;
    });

    if (disp == 'href') {
        window.location.href="newword.html";
    }
    else if (disp == 'flex') {
        canvasEl.style.display = "none";
    }
    else if (disp == 'none') {
        canvasEl.style.display = "flex";
    }
}

// Return the word randimized.
function randomWord() {
    var index = Math.floor(Math.random() * words.length);
    if (addedWord == null) {
        secretWord = words[index];
    } else {
        secretWord = addedWord;
    }
    wordLen = secretWord.length;
}

function correctChar(character) {
    for (let i = 0; i < secretWord.length; i++) {
        // Found all char coincients
        if (secretWord[i] == character) {
            charDrawing(character, i, true);
            correctAttemps++;
            endGame(incorrectAttemps, correctAttemps);
        }
    }
}

function incorrectChar(character) {
    incorrectList.push(character);
    incorrectAttemps++;
    charDrawing(incorrectList, incorrectAttemps, false);
    drawGallow(incorrectAttemps);
    endGame(incorrectAttemps, correctAttemps);
}

// Return the key pressed by the user.
function keyboardCapturer(evObject) {
    let character = String.fromCharCode(evObject.which).toUpperCase();
    // Check if the character is a valid char and if isn't a key previously pressed.
    if ((evObject.which >= 97 && evObject.which <= 122) && (usedKeyList.indexOf(character) == -1)) {
        usedKeyList.push(character);
        // Identify if the character pressed is there inside the word.
        let index = secretWord.indexOf(character);

        if (index == -1) {
            incorrectChar(character);
        }
        else {
            correctChar(character);
        }
    }
}

function endGame(inAtm, coAtm) {
    // lose and win function allocated on modal.js
    if (inAtm == 9) {
        lose();
    }
    if (coAtm == secretWord.length){
        win();
    }
    sessionStorage.clear();
}

// ---------------newword-------------

function startGame() {
    lobbyGame('none');
    randomWord();
    drawingCanvas();
    wordHolder();
    // Keep listening for any keypress event and call a function returning his key.
    document.onkeypress = keyboardCapturer;
}
