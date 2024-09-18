const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function setupCanvas () {
    let size = window.innerWidth/2;
    if (window.innerHeight < window.innerWidth) {
        size = window.innerHeight/2;
    }
    canvas.style.width = size + "px";
    canvas.style.height = canvas.style.width;
    canvas.width = size;
    canvas.height = size;
}
setupCanvas();

let mouseX = 0;
let mouseY = 0;
let mousePressed = false;
let mouseHoldingChecker = false;
let mouseHeldCheckerIndex = null;

let running = true;
let checkers = [];


let checkerColors = ["orange", "white"];

const squareSize = canvas.width / 8;

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function renderBoard() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    let useRed = true;
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            if (useRed) {
                context.fillStyle = "red";
                useRed = false;
            } else {
                context.fillStyle = "black";
                useRed = true;
            }
            if (y == 7) { useRed = !useRed; }

            context.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
        }
    }
}
function createChecker(x, y, color) {
    let checker = {
        x: x,
        y: y,
        color: color,
        rectX: x - squareSize / 2,
        rectY: y - squareSize / 2
    };

    // Method to render the checker (circle) on the canvas
    checker.render = function () {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, squareSize / 3, 0, Math.PI * 2); // Draw a circle at (x, y) with radius 50
        context.fill(); // Fill with red
        context.strokeStyle = 'black';
        context.lineWidth = 5;
        context.stroke(); // Outline with black

    }

    checker.mouseCollision = function () {
        if (mousePressed && (!mouseHoldingChecker || mouseHeldCheckerIndex === checkers.indexOf(this))) {
            if (mouseX > this.rectX && mouseX < this.rectX + squareSize) {
                if (mouseY > this.rectY && mouseY < this.rectY + squareSize) {
                    mouseHoldingChecker = true;
                    mouseHeldCheckerIndex = checkers.indexOf(this);
                    this.x = mouseX;
                    this.y = mouseY;
                    this.rectX = mouseX - (squareSize/2);
                    this.rectY = mouseY - (squareSize/2);
                }
            }
        }
    }

    checkers.push(checker);
}

function createCheckers() {
    // top rows
    for (let x = 2; x <= 8; x += 2) {
        createChecker((x * squareSize) - squareSize / 2, squareSize / 2, checkerColors[0]);
    }
    for (let x = 1; x <= 8; x += 2) {
        createChecker((x * squareSize) - squareSize / 2, (squareSize * 1) + squareSize / 2, checkerColors[0]);
    }
    for (let x = 2; x <= 8; x += 2) {
        createChecker((x * squareSize) - squareSize / 2, (squareSize * 2) + squareSize / 2, checkerColors[0]);
    }

    // bottom row
    for (let x = 1; x <= 8; x += 2) {
        createChecker((x * squareSize) - squareSize / 2, (canvas.height) - squareSize / 2, checkerColors[1]);
    }
    for (let x = 2; x <= 8; x += 2) {
        createChecker((x * squareSize) - squareSize / 2, (canvas.height - squareSize * 2) + squareSize / 2, checkerColors[1]);
    }
    for (let x = 1; x <= 8; x += 2) {
        createChecker((x * squareSize) - squareSize / 2, (canvas.height - squareSize * 3) + squareSize / 2, checkerColors[1]);
    }
}

createCheckers();

document.addEventListener('keydown', (event) => {
    if (event.key === 'i') {
        running = false;
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
});

document.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
})

canvas.addEventListener("mousedown", (event) => {
    mousePressed = true;
    event.preventDefault();
})
document.addEventListener("mouseup", (event) => {
    mousePressed = false;
    mouseHoldingChecker = false;
    mouseHeldCheckerIndex = null;
})





async function game() {
    const frameDelay = 1000 / 60;

    while (running) {
        renderBoard();


        for (checker of checkers) {
            checker.render();
            checker.mouseCollision();
        }

        await wait(frameDelay);
    }
}

game();