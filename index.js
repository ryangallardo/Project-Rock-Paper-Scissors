function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    switch(randomNumber) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissor";
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
   

let playerScore = 0;
let computerScore = 0;
let tie = 0;

function game(e) {
    const computerSelection = getComputerChoice();
    let playerSelection;
    let whoWinTheGame;
        // First to win 5
        //while (playerScore < 5 && computerScore < 5) {
        // 5 rounds only
        //for (let i = 1; i<=5; i++) {
            //playerSelection = prompt("Choose your Hero!");
            
            playerSelection = e.srcElement.innerText.toLowerCase();

            whoWinTheGame = playRound(playerSelection, computerSelection);
            if (playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissor") {
                if (whoWinTheGame === "player") {
                    playerScore++;
                    playercounter.textContent = playerScore;
                }else if (whoWinTheGame === "computer") {
                    computerScore++;
                    compcounter.textContent = computerScore;
                }else {
                    tie++;
                    console.log("Tie: " + tie);
                }
            }else {
                alert("Please enter valid input!");
            }
            
        
        //}
        //}
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            result.textContent = "\nCongratulations! You won!"
        }else if (playerScore < computerScore){
            result.textContent = "You lose..." + "\nBetter Luck next time!"
        }else {
            result.textContent = "\nIt's a tie! Want a rematch?"
        }
    }
}

function sample(e){
    console.log(e.srcElement.innerText.toLowerCase());
}

//console.log(game())
const result = document.getElementById('results');
const playercounter = document.querySelector('.playerscore');
const compcounter = document.querySelector('.compscore');

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', game))

//console.log(getComputerChoice());