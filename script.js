// console.log("Henlo!")

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = choices[(Math.floor(Math.random() * choices.length))];
    return choice
}

function getUserInput() {
    let choice = prompt("Choose rock, paper or scissors").toLowerCase();
    do {
        choice = prompt("Choose rock, paper or scissors").toLowerCase();
    }
    while (!choices.includes(choice));
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection == "rock" && playerSelection == "rock") {
        return `draw - ${computerSelection} vs ${playerSelection}`;
    }
    else if(computerSelection == "rock" && playerSelection == "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(computerSelection == "rock" && playerSelection == "scissors") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if(computerSelection == "paper" && playerSelection == "rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if(computerSelection == "paper" && playerSelection == "paper") {
        return `draw - ${computerSelection} vs ${playerSelection}`;
    }
    else if(computerSelection == "paper" && playerSelection == "scissors") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(computerSelection == "scissors" && playerSelection == "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(computerSelection == "scissors" && playerSelection == "paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if(computerSelection == "scissors" && playerSelection == "scissors") {
        return `draw - ${computerSelection} vs ${playerSelection}`;
    }
}
// const playerSelection = "rock";
const computerSelection = getComputerChoice();
const playerSelection = getUserInput();
console.log(`Computer - ${computerSelection}`);
console.log(`Player - ${playerSelection}`);
console.log(playRound(playerSelection,computerSelection));