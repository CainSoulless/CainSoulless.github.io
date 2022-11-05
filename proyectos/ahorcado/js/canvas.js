
// The character plus the space are equal to 100 px
let charSpace = 100;

function getX() {
    // length of the whole word maded characters and spaces.
    let len = (charSpace * wordLen) - (charSpace / wordLen);

    // X, beginning of the word on the cartesian plane.
    let x = (1200 / 2) - (len / 2) + 4;
    return x;
} 

function drawingCanvas() {
    table.lineWidth = 8;
    table.lineCap = "round";
    table.lineJoin = "round";
    table.fillStyle = "#E5E5E5";
    table.strokeStyle = "#0A3871";

    table.fillRect(0, 0, 1200, 800);
    table.beginPath();
    table.moveTo(450, 500);
    table.lineTo(750, 500);
    table.stroke();
    table.closePath();
}

function wordHolder() {
    var x = getX();

    table.lineWidth = 8;
    table.lineCap = "round";
    table.lineJoin = "round";
    table.fillStyle = "#E5E5E5";
    table.strokeStyle = "#0A3871";

    for (let i = 0; i < wordLen; i++) {
        table.moveTo(x + (charSpace * i), 640);
        table.lineTo(x + 50 + (charSpace * i), 640);
    }

    table.stroke();
    table.closePath();
}


// correct arg. take if the char is correct or incorrect (true or false).
function charDrawing(character, index, correct) {
    var x = getX();
    table.font = "80px Inter";
    table.lineWidth = 2;

    if (correct == true) {
        var tmpX = x;
        x += (index * 100);
        table.fillStyle = "#0A3871";
        table.strokeText(character, x, 630);
        table.fillText(character, x, 630);
        x = tmpX;
    }
    else if (correct == false){
        // var xIncorrect = 400 + ((incorrectList.length - 1) * 100);
        var xGoingBack= (1200 / 2) - (incorrectList.length * 30);

        clearIncorrectList();

        table.fillStyle = "#AA4A44";
        table.strokeText(incorrectList.join(" "), xGoingBack, 750);
        table.fillText(incorrectList.join(" "), xGoingBack, 750);       
    }
}

function clearIncorrectList() {
    // Clear the latest incorrect char print
    table.fillStyle = "#E5E5E5";
    // table.fillStyle = "white";
    table.fillRect(350, 680, 700, 100);
}

function drawGallow(incorrectAttemps) {
    table.lineWidth = 8;
    table.lineCap = "round";
    table.lineJoin = "round";
    table.fillStyle = "#E5E5E5";
    table.strokeStyle = "#0A3871";
    
    // First stick
    if (incorrectAttemps == 1) {
        table.beginPath();
        table.moveTo(500, 500);
        table.lineTo(500, 100);
        table.stroke();
        table.closePath();
    }

    // Second stick
    if (incorrectAttemps == 2) {
        table.beginPath();
        table.moveTo(500, 100);
        table.lineTo(650, 100);
        table.stroke();
        table.closePath();
    }

    // Third stick
    if (incorrectAttemps == 3) {
        table.beginPath();
        table.moveTo(650, 100);
        table.lineTo(650, 150);
        table.stroke();
        table.closePath();
    }

    // Head
    if (incorrectAttemps == 4) {
        table.beginPath();
        table.arc(650, 200, 45, 2 * Math.PI, false);
        table.stroke();
        table.closePath();
    }

    // Torso
    if (incorrectAttemps == 5) {
        table.beginPath();
        table.moveTo(650, 245);
        table.lineTo(650, 350);
        table.stroke();
        table.closePath();
    }

    // Right leg
    if (incorrectAttemps == 6) {
        table.beginPath();
        table.moveTo(650, 350);
        table.lineTo(710, 420);
        table.stroke();
        table.closePath();
    }

    // Left leg
    if (incorrectAttemps == 7) {
        table.beginPath();
        table.moveTo(650, 350);
        table.lineTo(590, 420);
        table.stroke();
        table.closePath();
    }

    // Rigth arm 
    if (incorrectAttemps == 8) {
        table.beginPath();
        table.moveTo(650, 260);
        table.lineTo(700, 330);
        table.stroke();
        table.closePath();
    }

    // Left arm 
    if (incorrectAttemps == 9) {
        table.beginPath();
        table.moveTo(650, 260);
        table.lineTo(600, 330);
        table.stroke();
        table.closePath();
    }
}
