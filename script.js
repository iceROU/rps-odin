// console.log("Henlo!")

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = choices[(Math.floor(Math.random() * choices.length))];
    return choice
}

function getUserInput() {
    let choice;
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

function playGame() {
    let rounds = 5;
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 1; i<=rounds; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getUserInput();
        console.log(`round ${i} - Computer - ${computerSelection} || Player - ${playerSelection}`);
        if (playRound(playerSelection, computerSelection).substring(0,5) == 'draw '){
            computerScore += 0;
            playerScore += 0;
        }
        else if (playRound(playerSelection, computerSelection).substring(0,5) == 'You L'){
            computerScore += 1;
        }
        else if (playRound(playerSelection, computerSelection).substring(0,5) == 'You w'){
            playerScore += 1;
        }
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`Final score: Computer: ${computerScore} || Player: ${playerScore}`);
}

playGame();