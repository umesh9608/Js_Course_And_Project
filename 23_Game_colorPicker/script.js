// Array of possible color names
const colorNames = [
    "Red", "Green", "Blue", "Yellow", "Purple", "Cyan",
    "Magenta", "Orange", "Pink", "Brown", "Lime",
    "Olive", "Teal", "Navy", "Maroon", "Silver",
];

// Game settings
let winingScore = 3; // Number of correct picks to win
let targetColor = ""; // Current target color
let score = 0; // Current score
let timer = 60; // 1 min = 60 seconds
let gameInterval, timerInterval; // Interval IDs for clearing later

// Function to randomly set background colors on all cells
let setRandomColor = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const randomIndex = Math.floor(Math.random() * colorNames.length);
        const randomColor = colorNames[randomIndex];
        cell.style.backgroundColor = randomColor;
        cell.setAttribute('data-color', randomColor); // Store color name for checking later
    });
}

// Function to set a random target color
let setTargetColor = () => {
    const randomIndex = Math.floor(Math.random() * colorNames.length);
    targetColor = colorNames[randomIndex];
    document.getElementById("targetColor").textContent = targetColor;
}

// Format time in mm:ss format
let formateTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};

// Update the timer every second
let updateTimer = () => {
    timer--;
    document.getElementById("timer").textContent = formateTime(timer);

    // If time runs out, end the game as loss
    if (timer <= 0) {
        endGame(false);
    }
};

// Initialize or Restart the game
let initializeGame = () => {
    score = 0;
    timer = 60;
    document.getElementById('score').textContent = score;
    document.getElementById('timer').textContent = formateTime(timer);
    document.getElementById("congratsOverlay").style.display = 'none';
    document.getElementById("loseOverlay").style.display = "none";

    setRandomColor();
    setTargetColor();

    const bgm = document.getElementById("backgroundMusic");
    bgm.play(); 

    gameInterval = setInterval(setRandomColor, 1000); // Change cell colors every second
    timerInterval = setInterval(updateTimer, 1000); // Countdown timer
}

// End the game with win or loss
let endGame = (isWin) => {
    clearInterval(gameInterval);
    clearInterval(timerInterval);

    document.getElementById("backgroundMusic").pause(); // Stop background music

    // Select the correct overlay based on win or lose
    const overlay = isWin
        ? document.getElementById("congratsOverlay")
        : document.getElementById("loseOverlay");

    overlay.style.display = 'block';

    // Play win or lose sound
    if (isWin) {
        document.getElementById("winMusic").play();
    } else {
        document.getElementById("loseMusic").play();
    }
}

// Handle cell click
let handleClick = (e) => {
    const clickedColor = e.target.getAttribute("data-color");

    if (clickedColor === targetColor) {
        // Correct color clicked
        score++;
        document.getElementById("score").textContent = score;

        // Check if player reached winning score
        if (score === winingScore) {
            endGame(true);
        }

        // Change colors again after correct click
        setRandomColor();
        setTargetColor();

        // Play correct click sound
        document.getElementById("correctMusic").play();
    } else {
        // Wrong color clicked
        document.getElementById("incorrectMusic").play();
    }
};

// Add click listeners to all cells
document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', handleClick);
});

// Add click listeners to restart buttons
document.getElementById("restartGameOverlay").addEventListener('click', initializeGame);
document.getElementById("restartGameOverlayLose").addEventListener("click", initializeGame);

// Start the game for the first time
initializeGame();