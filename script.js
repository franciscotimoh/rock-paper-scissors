// keep track of player scores
let humanScore = 0;
let computerScore = 0; 

// function `getComputerChoice`
// randomly return one of the three Strings: "rock", "paper", "scissors"
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// function `getHumanChoice`
// prompt the user for one of the three Strings mentioned above.
function getHumanChoice() {
    return prompt('Type an option between "Rock," "Paper," and "Scissors."').toLowerCase();
}

// create a function that plays a round
function playRound(humanChoice, computerChoice) {
    const results = document.querySelector(".results");
    if (humanChoice === computerChoice) {
        results.textContent = "Tie!";
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++;
            results.textContent = ("You lose! Paper beats Rock.");
        } else {
            humanScore++;
            results.textContent = "You win! Rock beats Scissors.";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore++;
            results.textContent = "You lose! Scissors beat Paper.";
        } else {
            humanScore++;
            results.textContent = "You win! Paper beats Rock.";
        }
    } else {
        if (computerChoice == "rock") {
            computerScore++;
            results.textContent = "You lose! Rock beats Scissors.";
        } else {
            humanScore++;
            results.textContent = "You win! Paper beats Rock.";
        }
    }

    const score = document.querySelector(".score"); 
    score.textContent = `Player score: ${humanScore}, Computer score: ${computerScore}`;

    const winner = document.querySelector(".winner"); 
    if (humanScore === 5) {
        winner.textContent = 'Player wins!';
        document.querySelector(".buttons").remove(); 
    } else if (computerScore === 5) {
        winner.textContent = 'Computer wins!';
        document.querySelector(".buttons").remove(); 
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors"); 

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice()); 
});
