// console.log("Henlo!")

function getComputerChoice(){
    let choice =  Math.floor(Math.random() * 3);
    console.log(choice);
    if (choice === 0){
        choice = 'Rock';
    }
    else if (choice === 1){
        choice = 'Paper';
    }
    else {
        choice = 'Scissors'
    }
    return choice;
}

console.log(getComputerChoice());