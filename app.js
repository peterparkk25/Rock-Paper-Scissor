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
    else if (computerChoice === "paper") {
      computerScore++;
      console.log("You lose! Paper beats rock!");
    } else {
      humanScore++;
      console.log("You win! Rock beats scissors");
    }
  } else if (lowerHumanChoice === "paper") {
    if (computerChoice === "paper")
      console.log("It's a tie! You both chose paper!");
    else if (computerChoice === "scissor") {
      computerScore++;
      console.log("You lose! Scissors beats paper!");
    } else {
      humanScore++;
      console.log("You win! Paper beats rock");
    }
  } else {
    if (computerChoice === "scissor")
      console.log("It's a tie! You both chose scissors!");
    else if (computerChoice === "rock") {
      computerScore++;
      console.log("You lose! Rock beats scissors!");
    } else {
      humanScore++;
      console.log("You win! Scissors beats paper");
    }
  }
};

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(humanSelection, computerSelection);

// playRound(humanSelection, computerSelection);

const playGame = function () {
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore)
    console.log("You win! You have more points that the computer!");
  else if (humanScore === computerScore)
    console.log(
      "The game is a tie! Both you and the computer have the same score!"
    );
  else console.log("You lose, the computer scored more points than you!");
};

playGame();
