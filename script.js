// console.log("Henlo!")

let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = choices[(Math.floor(Math.random() * choices.length))];
    return choice
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {

}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));