// console.log("Henlo!")

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = choices[(Math.floor(Math.random() * choices.length))];
    return choice
}

// console.log(getComputerChoice());

function getUserInput() {
    let choice = prompt("Choose rock, paper or scissors").toLowerCase();
    do {
        choice = prompt("Choose rock, paper or scissors").toLowerCase();
    }
    while (!choices.includes(choice));
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection == "rock") {
        return "draw";
    }
    else if(computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if(computerSelection == "scissors") {
        return "You Win! Rock beats Scrissors"
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));
console.log(getUserInput());