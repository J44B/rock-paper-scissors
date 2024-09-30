// Create a game of Rock Paper Scissors to play in the console against the computer
// git@github.com:J44B/rock-paper-scissors.git

// define possible options
const options = ["Rock", "Paper", "Scissors"];

// Get user input and slice array

const userChoice = process.argv.slice(2);

// get random option for computer

const computerChoice = [Math.floor(Math.random() * options.length)];

// Define who is the winner
const winner = function whoWins() {
    // Check for tie
    if (computerChoice === userChoice) {
        return "It's a tie.";
        // Check for winner
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You win. Congratulations.";
    }
    return "I win. Haha!";
};

// Final output
console.log(
    `You chose ${userChoice}. I chose ${
        (computerChoice, options[computerChoice])
    }. ${winner}`
);
