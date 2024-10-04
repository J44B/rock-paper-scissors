// Create a game of Rock Paper Scissors to play in the console against the computer
// git@github.com:J44B/rock-paper-scissors.git

// define possible options
const options = ['Rock', 'Paper', 'Scissors'];

// Get user input and slice array

const userChoice = process.argv[2];

// Analyse user input
const validChoice = function analyseUserChoice() {
  if (
    userChoice === 'Rock' ||
    userChoice === 'Paper' ||
    userChoice === 'Scissors'
  ) {
    return true;
  } else {
    return false;
  }
};

// get random option for computer

const computerChoice = options[Math.floor(Math.random() * options.length)];

// Define who is the winner
const winner = function whoWins() {
  // Check for draw
  if (computerChoice === userChoice) {
    return "It's a draw.";
    // Check for winner
  } else if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    return 'You chose wisely. Congratulations.';
  } else {
    return 'You chose poorly. Haha!';
  }
};

// Final output
function output() {
  if (!validChoice()) {
    console.log("No valid input. Please choose 'Rock', 'Paper' or 'Scissors'.");
  } else {
    console.log(
      `You chose ${userChoice}. I chose ${computerChoice}. ${winner()}`
    );
  }
}
output();
