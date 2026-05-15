let humanScore=0,computerScore=0;
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

function getHumanChoice()
{
    let r= prompt("Enter rock paper or scissor");
    console.log("The user chose: " + r);
    return r;
}

function playRound(h, c) 
{
    if((h=="rock"&&c=="scissor")||(h=="paper"&&c=="rock")||(h=="scissor"&&c=="paper"))
        humanScore++;
    else if((c=="rock"&&h=="scissor")||(c=="paper"&&h=="rock")||(c=="scissor"&&h=="paper"))
        computerScore++;
}

function playGame()
{
    for(let i=1;i<=5;i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Current score - You: ${humanScore}, Computer: ${computerScore}`);
    }
}
playGame();
console.log("Your Final score="+ humanScore)
console.log("Computer's Final score="+ computerScore)
if (humanScore>computerScore)
    console.log("You Win");
else if(humanScore<computerScore)
    console.log("You Loose");
else
    console.log("It's A Tie");