const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // console.log(computerChoice);
    let result = "";
    if (playerChoice === computerChoice) {
        result = "durrang"
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "siz yutdingiz" : "siz yutqazdingiz";
                break;
            case "paper":
                result = (computerChoice === "rock") ?  "siz yutdingiz" : "siz yutqazdingiz";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "siz yutdingiz" : "siz yutqazdingiz";
                break;
        }
    }
    playerDisplay.textContent = `player: ${playerChoice}`
    computerDisplay.textContent = `Computer" ${computerChoice}`
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText")

    switch (result) {
        case "siz yutdingiz":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            resultDisplay.classList.add("greenText")
            break;
        case "siz yutqazdingiz":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            resultDisplay.classList.add("redText");
            break;
    }

}

