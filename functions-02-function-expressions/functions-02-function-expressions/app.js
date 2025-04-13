const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameisRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER}, of ${SCISSORS}:`).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice == pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
      ? RESULT_PLAYER_WINS
      : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
  if (gameisRunning) {
    return;
  }
  gameisRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection);
  }
  let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE}, computer picked ${computerSelection}. `
  if (winner === RESULT_DRAW) {
    message = message += "It's a draw."
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message += "You win!"
  } else if (winner == RESULT_COMPUTER_WINS) {
    message += "Computer wins."
  }
  alert(message);
  gameisRunning = false;
});


const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }
  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
}

const subtractUp = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum -= num;
  }
  resultHandler(sum);
}

const showResult = (result) => {
  alert('The result after adding all numbers is: ' + result);
}

sumUp(showResult, 1, 4, 15, "cat", -3, 10);
subtractUp(showResult, 1, 4, 15, -3, 10);