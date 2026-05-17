let humanScore=0,computerScore=0,gameOver=false;
function getComputerChoice()
{
    let c,r;
    c=Math.random();
    if(c<0.33)
        r="rock";
    else if(c<0.66)
        r="paper";
    else
        r="scissor";
    console.log("The computer chose: " + r);
    return r;
}

function playRound(h, c) 
{
    if(gameOver)
        return;
    if((h==="rock"&&c==="scissor")||(h==="paper"&&c==="rock")||(h==="scissor"&&c==="paper"))
    {
        humanScore++;
        result.textContent="You Won This Round!";
    }
    else if((c==="rock"&&h==="scissor")||(c==="paper"&&h==="rock")||(c==="scissor"&&h==="paper"))
    {
        computerScore++;
        result.textContent="You Lost This Round!";
    }
    else
        result.textContent="Round Tied!";
}

function playGame(humanSelection)
{
    
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (humanScore === 5 && computerScore < 5) 
    {
        result.textContent = "You beat the computer!";
        gameOver = true;
        setTimeout(resetGame, 3000);
    } 
    else if (computerScore === 5) 
    {
        result.textContent = "You lost to the computer!";
        gameOver = true;
        setTimeout(resetGame, 3000);
    }
  humanScoreTag.textContent = humanScore;
  computerScoreTag.textContent = computerScore;
}

const playButton=document.querySelector(".playButton");
const introScreen=document.querySelector(".introScreen");
const gameScreen=document.querySelector(".gameScreen");
const result=document.querySelector(".result");
const humanScoreTag=document.querySelector("#humanScore");
const computerScoreTag=document.querySelector("#computerScore");
const gameButtons=document.querySelectorAll(".game-buttons");

playButton.addEventListener("click",startGame);
gameButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const humansChoice = button.dataset.choice;
    playGame(humansChoice);
  });
});

function startGame()
{
    hidePlayButton();
    unhideGameScreen();
}



function hidePlayButton()
{
    introScreen.classList.add("hidden");
}

function unhideGameScreen()
{
    gameScreen.classList.remove("hidden");
}

function resetGame() 
{
  humanScore = 0;
  computerScore = 0;
  gameOver = false;

  humanScoreTag.textContent = humanScore;
  computerScoreTag.textContent = computerScore;
  result.textContent = "Choose Your Next Move, first to 5 wins!";
  introScreen.classList.remove("hidden");
  gameScreen.classList.add("hidden");
}