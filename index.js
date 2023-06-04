function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    switch(randomNumber) {
        case 1: return "Rock"
        break;
        case 2: return "Paper"
        break;
        case 3: return "Scissor"
        break;
    }
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    let player = playerSelection.toLowerCase();
    let comp = computerSelection.toLowerCase();

    if (player === "rock") {
        if (comp === "paper") {
            return "You Lose! Paper beats Rock";
        }else if (comp === "scissor") {
            return "You Win! Rock beats Scissor";
        }else {
            return "It's a tie!";
        }
    }else if (player === "paper") {
        if (comp === "rock") {
            return "You Win! Paper beats Rock";
        }else if (comp === "scissor") {
            return "You Lose! Scissor beats Paper";
        }else {
            return "It's a tie!";
        }
    }else if (player === "Scissor") {
        if (comp === "rock") {
            return "You Lose! Rock beats Scissor";
        }else if (comp === "paper") {
            return "You Win! Scissor beats Paper";
        }else {
            return "It's a tie!";
        }
    }else {
        return "Please enter valid input!"
    }

}
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));