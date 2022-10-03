/// PROGRAMGame Rock/Paper/Scissors

// Obtain a random Rock Paper Scissors by the computer
// Store the information on a variable

function getComputerChoice() {
  let pcChoice = Math.floor(Math.random() * 3) + 1;
  if (pcChoice == 1) {
    return "ROCK";
  } else if (pcChoice == 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

// Test user vs input who is the winner (PC or user)
// Return array with string related with the round and who won the round

function playerRound(playerSelection, computerSelection) {
  if (playerSelection == "ROCK" && computerSelection == "ROCK") {
    return ["Tie! No winner", "Tie"];
  } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    return ["You Lose! Paper beats Rock", "Opponent"];
  } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    return ["You Win! Rock beats Scissors", "Player"];
  } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    return ["You Win! Paper beats Rock", "Player"];
  } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
    return ["Tie! No winner", "Tie"];
  } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    return ["You Lose! Scissors beat Paper", "Opponent"];
  } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    return ["You Lose! Rock beats Scissors", "Opponent"];
  } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    return ["You Win! Scissors beat Paper", "Player"];
  } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
    return ["Tie! No winner", "Tie"];
  }
}

function game ()







// Selects all buttons and stores on variable buttons
const buttons = document.querySelectorAll("button");
console.log(buttons);
// Event listener to every button returning the id atribute of the clicked button and Store in Player Selection variable
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "btnR") {
      playerSelection = "ROCK";
    } else if (button.id === "btnP") {
      playerSelection = "PAPER";
    } else {
      playerSelection = "SCISSORS";
    }
    // Get computerChoice and store in Variable
    let computerSelection = getComputerChoice();
    // Show computerChoice on HTML
    document.getElementById(
      "opponentChoice"
    ).innerHTML = `Opponent Selection: ${computerSelection}`;
  });

});


//********* Falta integrar função game



// Play the game

// function game() {
//     // LOOP 5 times
//         //Ask the user for input
//         //Obtain computer random choice
//         //Verify if it is winner
//         //Show alerts in every round to update about who won the round and updated scores

//         let playerScore = 0;
//         let computerScore = 0;
//         let tie = 0;
//     for (let i = 0; i < 5; i++) {
//         // Ask user for information and store in variable with UpperCase
//         let player1 = prompt("What is your option?: Rock, Paper or Scissors");
//         playerSelection = player1.toUpperCase();
//         // Random choice by the PC and store in variable with Uppercase
//         let computerSelection = getComputerChoice();

//         // IF user imput is valid or if the user wants to quit

//         if (playerSelection == "QUIT") {
//              break;

//         } else if (playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS") {
//             let winner = playerRound(playerSelection,computerSelection);
//             console.log("winner is" + winner)

//             // Checks and updates the scores
//             if (winner[1] == "Opponent") {
//                 computerScore +=1;

//             } else if (winner[1] == "Tie") {
//                 tie +=1;

//             } else if (winner[1] == "Player") {
//                 playerScore +=1;

//             }
//             alert(`${winner[0]}. Your Score:${playerScore}; Oponnent Score:${computerScore}; Tie:${tie} `)

//         } else {
//             alert("Your option is not valid! Try again or write quit.");
//             i-- //decreases the counter by 1 so that this trial does not count
//         }

//     }

// }

// game()
