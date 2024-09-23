let userScore = 0;
let compScore = 0;

const rock = document.querySelector('#rock');
const scissor = document.querySelector('#scissor');
const paper = document.querySelector('#paper');


const drawGame = () => {
    console.log ('game was drawn');
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log('User Wins');
        userScore++;
        document.querySelector('#userScore').innerText = userScore;
    } else {
        console.log('You lose');
        compScore++;
        document.querySelector('#compScore').innerText = compScore;
        // can also do like
        // updateScore = document.querySelector('#compScore')
        // updateScore.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const computerChoice = generateComputerChoice();
    console.log("computer choice = ", computerChoice);

    if (userChoice === computerChoice) {
        // Draw Game
        drawGame();
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
        showWinner(userWin);
    } 
}

//Generate Computer Choice
function generateComputerChoice() {
    const options = ['rock', 'paper','scissor'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
// console.log(generateComputerChoice());

rock.addEventListener('click', () => {
    const userChoice = rock.getAttribute('id');
    //console.log('rock clicked', userChoice);
    playGame(userChoice);
})

scissor.addEventListener('click', () => {
    const userChoice = scissor.getAttribute('id');
    //console.log('scissor clicked', userChoice);
    playGame(userChoice);
})

paper.addEventListener('click', () => {
    const userChoice = paper.getAttribute('id');
    //console.log('paper clicked', userChoice);
    playGame(userChoice);
})