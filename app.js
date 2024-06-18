const getComputerChoice = function () {
  computerChoice = "";
  randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) return "rock";
  else if (randomNum === 1) return "paper";
  else return "scissor";
};

// const getHumanChoice = function () {
//   const returnValue = window.prompt(
//     "Please enter 'rock', 'paper', or scissor'"
//   );
//   console.log(returnValue);
//   return returnValue;
// };

let humanScore = 0;
let computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
  const result = document.querySelector(".result");
  const playerScoreBoard = document.querySelector(".playerCount");
  const computerScoreBoard = document.querySelector(".computerCount");
  let lowerHumanChoice = humanChoice.toLowerCase();
  if (lowerHumanChoice === computerChoice) {
    result.textContent = "It's a tie";
  } else if (lowerHumanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      result.textContent = "You lose! Paper beats rock!";
      computerScoreBoard.textContent = computerScore;
    } else {
      humanScore++;
      result.textContent = "You win! Rock beats scissors";
      playerScoreBoard.textContent = playerScore;
    }
  } else if (lowerHumanChoice === "paper") {
    if (computerChoice === "scissor") {
      computerScore++;
      result.textContent = "You lose! Scissors beats paper!";
      computerScoreBoard.textContent = computerScore;
    } else {
      humanScore++;
      result.textContent = "You win! Paper beats rock";
      playerScoreBoard.textContent = playerScore;
    }
  } else if (lowerHumanChoice === "scissor") {
    if (computerChoice === "rock") {
      computerScore++;
      result.textContent = "You lose! Rock beats scissors!";
      computerScoreBoard.textContent = computerScore;
    } else {
      humanScore++;
      result.textContent = "You win! Scissors beats paper";
      playerScoreBoard.textContent = playerScore;
    }
  }
};

// playGame();

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const playerOptions = [rockBtn, scissorBtn, paperBtn];

let rounds = 0;

playerOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const roundsLeft = document.querySelector(".roundsLeft");
    rounds++;
    console.log(this.innerText);
    roundsLeft.innerText = `Rounds Left: ${5 - rounds}`;
  });
});

const container = document.querySelector(".container");
const result = document.createElement("div");
result.classList.add("result");
result.textContent = "Temporary placeholder for result";
container.appendChild(result);

// //RPS from online

// const game = () => {
//   let playerScore = 0;
//   let computerScore = 0;
//   let moves = 0;

//   //Function to start playing game
//   const playGame = () => {
//     const rockBtn = document.querySelector(".rock");
//     const paperBtn = document.querySelector(".paper");
//     const scissorBtn = document.querySelector(".scissor");
//     const playerOptions = [rockBtn, paperBtn, scissorBtn];
//     const computerOptions = ["rock", "paper", "scissor"];

//     playerOptions.forEach((option) => {
//       option.addEventListener("click", function () {
//         const movesLeft = document.querySelector(".movesLeft");
//         moves++;
//         movesLeft.innerText = `Moves Left: ${5 - moves}`;

//         //returns 0, 1 , 2 and assigns computerChoice based on return value
//         //and uses bracket notation to access from computer Options
//         const choiceNumber = Math.floor(Math.random() * 3);
//         const computerChoice = computerOptions[choiceNumber];

//         winner(this.innerText, computerChoice);

//         if (moves === 5) {
//           gameOver(playerOptions, movesLeft);
//         }
//       });
//     });
//   };

//   const winner = (humanChoice, computerChoice) => {
//     const result = document.querySelector(".result");
//     const playerScoreBoard = document.querySelector(".playerCount");
//     const computerScoreBoard = document.querySelector(".computerCount");
//     let lowerHumanChoice = humanChoice.toLowerCase();
//     if (lowerHumanChoice === computerChoice) {
//       result.textContent = "It's a tie";
//     } else if (lowerHumanChoice === "rock") {
//       if (computerChoice === "paper") {
//         computerScore++;
//         result.textContent = "You lose! Paper beats rock!";
//         computerScoreBoard.textContent = computerScore;
//       } else {
//         humanScore++;
//         result.textContent = "You win! Rock beats scissors";
//         playerScoreBoard.textContent = playerScore;
//       }
//     } else if (lowerHumanChoice === "paper") {
//       if (computerChoice === "scissor") {
//         computerScore++;
//         result.textContent = "You lose! Scissors beats paper!";
//         computerScoreBoard.textContent = computerScore;
//       } else {
//         humanScore++;
//         result.textContent = "You win! Paper beats rock";
//         playerScoreBoard.textContent = playerScore;
//       }
//     } else if (lowerHumanChoice === "scissor") {
//       if (computerChoice === "rock") {
//         computerScore++;
//         result.textContent = "You lose! Rock beats scissors!";
//         computerScoreBoard.textContent = computerScore;
//       } else {
//         humanScore++;
//         result.textContent = "You win! Scissors beats paper";
//         playerScoreBoard.textContent = playerScore;
//       }
//     }
//   };

//   const gameOver = (playerOptions, movesLeft) => {
//     const chooseMove = document.querySelector(".move");
//     const result = document.querySelector(".result");
//     const reloadBtn = document.querySelector(".reload");

//     playerOptions.forEach((option) => {
//       option.style.display = "none";
//     });

//     chooseMove.innerText = "Game Over!!";
//     movesLeft.style.display = "none";

//     if (playerScore > computerScore) {
//       result.style.fontSize = "2rem";
//       result.innerText = "You Won The Game";
//       result.style.color = "#308D46";
//     } else if (playerScore < computerScore) {
//       result.style.fontSize = "2rem";
//       result.innerText = "You Lost The Game";
//       result.style.color = "red";
//     } else {
//       result.style.fontSize = "2rem";
//       result.innerText = "Tie";
//       result.style.color = "grey";
//     }
//     reloadBtn.innerText = "Restart";
//     reloadBtn.style.display = "flex";
//     reloadBtn.addEventListener("click", () => {
//       window.location.reload();
//     });
//   };

//   playGame();
// };

// game();
