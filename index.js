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
            return "computer";
        }else if (comp === "scissor") {
            return "player";
        }else {
            return "It's a tie!";
        }
    }else if (player === "paper") {
        if (comp === "rock") {
            return "player";
        }else if (comp === "scissor") {
            return "computer";
        }else {
            return "It's a tie!";
        }
    }else if (player === "scissor") {
        if (comp === "rock") {
            return "computer";
        }else if (comp === "paper") {
            return "player";
        }else {
            return "It's a tie!";
        }
    }else {
        return "Please enter valid input!"
    }

}
   


function game() {
    const computerSelection = getComputerChoice();
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;
    let whoWinTheGame;
        // First to win 5
        while (playerScore < 5 && computerScore < 5) {
        // 5 rounds only
        //for (let i = 1; i<=5; i++) {
            playerSelection = prompt("Choose your Hero!");
            
            whoWinTheGame = playRound(playerSelection, computerSelection);
            if (playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissor") {
                if (whoWinTheGame === "player") {
                    playerScore++;
                }else if (whoWinTheGame === "computer") {
                    computerScore++;
                }else {
                    tie++;
                }
            }else {
                return "Please enter valid input!"
            }
            
        
        //}
        }
    if (playerScore > computerScore) {
        return "Player score: " + playerScore + ", Comp Score: " + computerScore
         + ", Tie Rounds? " + tie + "\nCongratulations! You won!"
    }else if (playerScore < computerScore){
        return "Player score: " + playerScore + ", Comp Score: " + computerScore
         + ", Tie Rounds? " + tie + "\nBetter Luck next time!"
    }else {
        return "Player score: " + playerScore + ", Comp Score: " + computerScore
         + ", Tie Rounds? " + tie + "\nIt's a tie! Want a rematch?"
    }
}

console.log(game())
//console.log(getComputerChoice());