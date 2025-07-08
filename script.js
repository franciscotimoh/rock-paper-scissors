// function `getComputerChoice`
// randomly return one of the three Strings: "rock", "paper", "scissors"

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "Rock";
    } else if (random === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice());

// function `getHumanChoice`
// prompt the user for one of the three Strings mentioned above.

// keep track of player scores

// create a function that plays a round

// play 5 rounds