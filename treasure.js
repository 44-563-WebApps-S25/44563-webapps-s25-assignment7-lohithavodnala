// Variables to track the game state
const ids = [];
const silverLocations = [2, 5, 11, 21, 32];
const goldLocation = 15;
const snakeLocation = 20;

let score = 0;
let locationsVisited = 0;
let lastLocation = 0;
let gameOver = false;

// Setup the game field: 5 rows x 7 cols = 35 images
const gameField = document.getElementById("gameField");
for (let i = 0; i < 35; i++) {
    const img = document.createElement("img");
    img.id = "img" + i;
    img.src = "cactus jpg.webp";
    img.onclick = () => check(i);  // Attach click handler
    gameField.appendChild(img);
    ids.push(img.id);
}

// Check function: Handles each click
function check(position) {
    if (gameOver) return;  // Do nothing if game over

    const img = document.getElementById(ids[position]);

    if (position === goldLocation) {
        img.src = "gold.jpeg";
        score += 5;
    } else if (silverLocations.includes(position)) {
        img.src = "silver.jpeg";
        score += 3;
    } else if (position === snakeLocation) {
        img.src = "snake.jpeg";
        score -= 3;
        gameOver = true;
    } else {
        img.src = "pottery.jpeg";
        score += 1;
    }

    locationsVisited++;
    lastLocation = position;

    document.getElementById("locations").innerText = `Number of locations checked is ${locationsVisited}.`;
    document.getElementById("score").innerText = `Score is ${score}.`;
}

// Help function: Provides hints
function help() {
    const row = Math.floor(lastLocation / 7);
    const col = lastLocation % 7;

    const neighbors = [
        lastLocation - 1, lastLocation + 1,
        lastLocation - 7, lastLocation + 7
    ];

    if (neighbors.some(n => silverLocations.includes(n))) {
        document.getElementById("help").innerText = "Help report: clink";
        return;
    }

    const snakeRow = Math.floor(snakeLocation / 7);
    const snakeCol = snakeLocation % 7;

    if (Math.abs(row - snakeRow) <= 1 && Math.abs(col - snakeCol) <= 1) {
        document.getElementById("help").innerText = "Help report: rattle";
    } else {
        document.getElementById("help").innerText = "Help report: wind";
    }
}
