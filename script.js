let userScore = localStorage.getItem("userScore")
  ? parseInt(localStorage.getItem("userScore"))
  : 0;
let compScore = localStorage.getItem("compScore")
  ? parseInt(localStorage.getItem("compScore"))
  : 0;

// let userScore = 0;
// let compScore = 0;

document.querySelector("#userScore").innerText = userScore;
document.querySelector("#compScore").innerText = compScore;

const rock = document.querySelector("#rock");
const scissor = document.querySelector("#scissor");
const paper = document.querySelector("#paper");
const messagewin = document.querySelector(".message-win");

const gameResults = document.querySelector(".game-results");
const userPickedDisplay = document.querySelector("#userPicked");
const pcPickedDisplay = document.querySelector("#pcPicked");
const containerTwo = document.querySelector(".container-two");

const ruleButton = document.querySelector(".btn-rules");
const closeButton = document.querySelector(".cross");
const ruleBox = document.querySelector(".rule-box");

const playAgainButton = document.querySelector(".button-play-again");
const nextButton = document.querySelector(".btn-next");
const messageAgainstPC = document.querySelector(".message-against-pc");

const displayGameWon = document.querySelector(".won-game");
const scoreContainer = document.querySelector(".score-container");
const buttonPlayAgainTwo = document.querySelector(".button-play-again-two");

// Initially hide the rules section, cross button section and game results
ruleBox.style.display = "none";
closeButton.style.display = "none";
gameResults.style.display = "none";
nextButton.style.display = "none";
displayGameWon.style.display = "none";

// Show the rules and close button when the RULES button is clicked
ruleButton.addEventListener("click", function () {
  ruleBox.style.display = "flex"; // Show the rules
  closeButton.style.display = "flex"; // Show the rules
});

// Hide the rules when the cross is clicked
closeButton.addEventListener("click", function () {
  ruleBox.style.display = "none"; // Hide the rules
  closeButton.style.display = "none"; // Show the rules
});

const drawGame = (userChoice, computerChoice) => {
  console.log("game was drawn");
  messagewin.innerText = "TIE UP";
  gameResults.style.display = "flex";
  nextButton.style.display = "none";

  // Update the user's choice with the image for a tie
  userPickedDisplay.innerHTML = `<div class="${userChoice}" id="${userChoice}"><img src="images/${userChoice}.png" alt="${userChoice}"></div>`;

  // Update the computer's choice with the image for a tie
  pcPickedDisplay.innerHTML = `<div class="${computerChoice}" id="${computerChoice}"><img src="images/${computerChoice}.png" alt="${computerChoice}"></div>`;

  containerTwo.style.display = "none"; // Hide game container
  messageAgainstPC.style.display = "none";

  // Disable animations for both choices during a tie
  userPickedDisplay.classList.add("no-animation");
  pcPickedDisplay.classList.add("no-animation");

};


const showWinner = (userWin, userChoice, computerChoice) => {
  // Clear previous winners
  userPickedDisplay.classList.remove('no-animation', 'winner-border');
  pcPickedDisplay.classList.remove('no-animation', 'winner-border');

  if (userWin) {
    console.log("User Wins");
    messagewin.innerText = "YOU WIN";
    userScore++;
    document.querySelector("#userScore").innerText = userScore;
    localStorage.setItem("userScore", userScore);
    nextButton.style.display = "flex";

    // Add winner class to user choice
    userPickedDisplay.classList.add("winner-border");
  } else {
    console.log("You lose");
    messagewin.innerText = "YOU LOST";
    compScore++;
    document.querySelector("#compScore").innerText = compScore;
    localStorage.setItem("compScore", compScore);
    nextButton.style.display = "none";
    // can also do like
    // updateScore = document.querySelector('#compScore')
    // updateScore.innerText = compScore;

    // Add winner class to computer choice
    pcPickedDisplay.classList.add("winner-border");
  }
  gameResults.style.display = "flex"; // Show game results
  messageAgainstPC.style.display = "flex";
  // Update the user's choice with the image
  userPickedDisplay.innerHTML = `<div class="${userChoice}" id="${userChoice}"><img src="images/${userChoice}.png" alt="${userChoice}"></div>`;
  pcPickedDisplay.innerHTML = `<div class="${computerChoice}" id="${computerChoice}"><img src="images/${computerChoice}.png" alt="${computerChoice}"></div>`;

  containerTwo.style.display = "none"; // Hide game container
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  const computerChoice = generateComputerChoice();
  console.log("computer choice = ", computerChoice);

  if (userChoice === computerChoice) {
    // Draw Game
    drawGame(userChoice, computerChoice);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // computer choice -> Scissor, paper
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // computer choice -> rock, scissor
      userWin = computerChoice === "scissor" ? false : true;
    } else {
      // computer choice -> rock, paper
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

//Generate Computer Choice
function generateComputerChoice() {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
// console.log(generateComputerChoice());

rock.addEventListener("click", () => {
  const userChoice = rock.getAttribute("id");
  //console.log('rock clicked', userChoice);
  playGame(userChoice);
});

scissor.addEventListener("click", () => {
  const userChoice = scissor.getAttribute("id");
  //console.log('scissor clicked', userChoice);
  playGame(userChoice);
});

paper.addEventListener("click", () => {
  const userChoice = paper.getAttribute("id");
  //console.log('paper clicked', userChoice);
  playGame(userChoice);
});

playAgainButton.addEventListener("click", function () {
  document.querySelector("#userScore").innerText = userScore;
  document.querySelector("#compScore").innerText = compScore;
  messagewin.innerText = "";
  gameResults.style.display = "none";
  containerTwo.style.display = "flex"; // Show game container
  ruleBox.style.display = "none";
  closeButton.style.display = "none"; // Hide rules and close button section
});

nextButton.addEventListener("click", () => {
  displayGameWon.style.display = "flex";
  scoreContainer.style.display = "none";
  gameResults.style.display = "none";
});

buttonPlayAgainTwo.addEventListener("click", () => {
  displayGameWon.style.display = "none";
  scoreContainer.style.display = "flex";
  containerTwo.style.display = "flex";
});
