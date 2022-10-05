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

// Selects all buttons and stores on variable buttons
const buttons = document.querySelectorAll("button");
console.log(buttons);
// Event listener to every button returning the id atribute of the clicked button and Store in Player Selection variable
let computerScore = 0;
let tie = 0;
let playerScore = 0;

// Select the option of the player and store in Variable
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

    // Play round to see who wins the round. Store in variable
    let winner = playerRound(playerSelection, computerSelection);

    // Updates the scores of all players and ties.
    if (winner[1] == "Opponent") {
      computerScore += 1;
      document.getElementById("opponPlayer").innerHTML = computerScore;
    } else if (winner[1] == "Tie") {
      tie += 1;
      document.getElementById("tie").innerHTML = tie;
    } else if (winner[1] == "Player") {
      playerScore += 1;
      document.getElementById("scorePlayer").innerHTML = playerScore;
    }

    //Checks if all rounds have been played and presents a message to the winner
    //Defined that the winner is the one that wins 5 rounds faster
    if (computerScore == 5 || playerScore == 5) {
      let messageWinner;
      if (computerScore == 5) {
        messageWinner = "You Lose! Better Luck Next Time";
      } else {
        messageWinner = "You area the Winner";
      }
      // Updates the screen with the winner result
      document.getElementById("winner").innerHTML = messageWinner;
      computerScore = 0;
      playerScore = 0;
      tie = 0;
      // After 3 seconds the message with the winner is erased from the screnn
      // The Scores are updated do 0
      setTimeout(() => {
        document.getElementById("winner").innerHTML = "";
        document.getElementById("opponPlayer").innerHTML = computerScore;
        document.getElementById("scorePlayer").innerHTML = playerScore;
        document.getElementById("tie").innerHTML = tie;
      }, "3000");
    }
  });
});
