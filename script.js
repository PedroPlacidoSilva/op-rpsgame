/// PROGRAMGame Rock/Paper/Scissors







function userInfo() {
    let userChoice = document.getElementById("player").value; //userInput is the field that I am extracting the information
    console.log(userChoice)
    let x = document.getElementById("demo").innerHTML = "You selected: " + userChoice;
    return userChoice;
}

// Ask the user to imput Rock Paper Scissors
//Store the information on a variable

// playerSelection = prompt("What is your option?: Rock, Paper or Scissors");
// playerSelection = playerSelection.toUpperCase();
// console.log(playerSelection)
 
// IF user imput valid
// if (playerSelection != "ROCK" || playerSelection != "PAPER" || playerSelection != "SCISSORS") {
//     alert("Your option is not valid! Try again.")
// }
 
// Obtain a random Rock Paper Scissors by the computer
// Store the information on a variable
// Show the result of the random data of the computer





function getComputerChoice() {
    let pcChoice = Math.floor(Math.random()*3)+1;
    if (pcChoice == 1) {
        return "ROCK";
    } else if (pcChoice == 2) {
        return " PAPER";
    } else {// Ask user for information
        // When Click update the leaderboard 
        return "SCISSORS";
    }
}

let computerSelection = getComputerChoice(); // Store the random Choice of the Computer
// Ask user for information
// When Click update the leaderboard 


// Test user vs imput who is the winner (PC or user)

function playerRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK" && computerSelection == "ROCK") {
        return ["Tie! No winner","Tie"]
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        return ["You Lose! Paper beats Rock","Opponent"];
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return ["You Win! Rock beats Scissors", "Player"];
    
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        return ["You Win! Paper beats Rock", "Player"]
    } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
        return ["Tie! No winner", "Tie"];
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        return ["You Lose! Scissors beat Paper", "Opponent"];
    
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return ["You Lose! Rock beats Scissors", "Opponent"]
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return ["You Win! Scissors beat Paper", "Player"];
    } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
        return ["Tie! No winner", "Tie"];
    }
}

// let winner = playerRound(playerSelection,computerSelection);




    // IF User is the winner
        // Show message to the user that he is the winner
        // Show aditional message. Choice of the user beats Choice of the PC
function game() {
    // LOOP 5 times
        //Ask the user for input when press the button
        //Obtain computer random choice
        //Verify if it is winner
        //Create a WinnerBoard and update with the winner
        // In the end show message concluding who won?

        let playerScore = 0;
        let computerScore = 0;
        let tie = 0;
    for (let i = 0; i < 2; i++) {
        let player1 = prompt("What is your option?: Rock, Paper or Scissors");
        playerSelection = player1.toUpperCase();
                
        // IF user imput is valid or if the user rockwants to quit
        
        if (playerSelection == "QUIT") {
             break;
        } else if (playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS") {
            let winner = playerRound(playerSelection,computerSelection);
            
            // Checks and updates the scores
            if (winner[1] == "Opponent") {
                computerScore +=1;
                
            } else if (winner[1] == "Tie") {
                tie +=1;
                
            } else if (winner[1] == "Player") {
                playerScore +=1;
                
            }
            alert(`${winner[0]}. Your Score:${playerScore}; Oponnent Score:${computerScore}; Tie:${tie} `)
                
        } else {
            alert("Your option is not valid! Try again or write quit.");
        }
     

    }

}

game()
    
    
        // ELSE
        // Show message that the user is not the winner
        // Show aditional message. Choice of the user does not beat Choice of the PC
//  ELSE
    // Ask user to enter information again


   // Ask user for information
   // When Click update the leaderboard 