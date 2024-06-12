// console.log(Math.random());

const getComputerChoice = function () {
  computerChoice = "";
  randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) return "rock";
  else if (randomNum === 1) return "paper";
  else return "scissor";
};

const getHumanChoice = function () {
  const returnValue = window.prompt(
    "Please enter 'rock', 'paper', or scissor'"
  );
  console.log(returnValue);
  return returnValue;
};

let humanScore = 0;
let computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
  let lowerHumanChoice = humanChoice.toLowerCase();
  if (lowerHumanChoice === "rock") {
    if (computerChoice === "rock")
      console.log("It's a tie! You both chose rock!");
    else if (computerChoice === "paper")
      console.log("You lose! Paper beats rock!");
    else console.log("You win! Rock beats scissors");
  } else if (lowerHumanHoice === "paper") {
    if (computerChoice === "paper")
      console.log("It's a tie! You both chose paper!");
    else if (computerChoice === "scissor")
      console.log("You win! Rock beats scissors!");
    else console.log("You lose! Rock beats scissors");
  } else {
    if (computerChoice === "scissor")
      console.log("It's a tie! You both chose scissors!");
    else if (computerChoice === "rock")
      console.log("You lose! Rock beats scissors!");
    else console.log("You lose! Rock beats scissors");
  }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection, computerSelection);

playRound(humanSelection, computerSelection);
