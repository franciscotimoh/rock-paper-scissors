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

// play 5 rounds
function playGame() {
    // keep track of player scores
    let humanScore = 0;
    let computerScore = 0; 

    // create a function that plays a round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Tie!");
        } else if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                computerScore++;
                console.log("You lose! Paper beats Rock.");
            } else {
                humanScore++;
                console.log("You win! Rock beats Scissors.");
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                computerScore++;
                console.log("You lose! Scissors beat Paper.");
            } else {
                humanScore++;
                console.log("You win! Paper beats Rock.");
            }
        } else {
            if (computerChoice == "rock") {
                computerScore++;
                console.log("You lose! Rock beats Scissors.");
            } else {
                humanScore++;
                console.log("You win! Paper beats Rock.");
            }
        }

        console.log("Player score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice()); 
    }
}

playGame();