// const choices = document.querySelectorAll(".choice");
// const userChoiceSpan = document.querySelector("#user-choice span");
// const computerChoiceSpan = document.querySelector("#computer-choice span");
// const winnerSpan = document.querySelector("#winner span");

// const choicesArray = ["tosh", "qaychi", "qogoz"];

// choices.forEach(choice => {
//     choice.addEventListener("click", () => {
//         const userChoice = choice.dataset.choice;
//         const computerChoice = getComputerChoice();
//         const winner = determineWinner(userChoice, computerChoice);

//         userChoiceSpan.textContent = getEmoji(userChoice);
//         computerChoiceSpan.textContent = getEmoji(computerChoice);
//         winnerSpan.textContent = winner;
//     });
// });

// function getComputerChoice() {
//     const randomIndex = Math.floor(Math.random() * choicesArray.length);
//     return choicesArray[randomIndex];
// }

// function determineWinner(user, computer) {
//     if (user === computer) return "Durang!";

//     if (
//         (user === "tosh" && computer === "qaychi") ||
//         (user === "qaychi" && computer === "qogoz") ||
//         (user === "qogoz" && computer === "tosh")
//     ) {
//         return "Siz yutdingiz!";
//     }

//     return "Kompyuter yutdi!";
// }

// function getEmoji(choice) {
//     switch (choice) {
//         case "tosh":
//             return "🪨";
//         case "qaychi":
//             return "✂️";
//         case "qogoz":
//             return "📄";
//         default:
//             return "";
//     }
// }


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

