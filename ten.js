let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")

const userScore = document.querySelector("#user-score")
const compScore = document.querySelector("#comp-score")

//for Computer choices
const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    
    //It will only show integer values upto index 2
    const random = Math.floor(Math.random() * 3);
    return options[random];
};

//For draw game User = Comp
const drawGame = () => {
    msg.innerText = "Draw Game try again";
    msg.style.backgroundColor = "#8a2be2"
};

// For showing winner
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        user++;
        userScore.innerText = user;
        msg.innerText = `You Won!!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "palegreen"
    }
    else{
        comp++;
        compScore.innerText = comp;
        msg.innerText = `You lose... ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#d87093"
    }
}

//Entire game
const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp Choice = ", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper or scizzor
            userWin = compChoice === "paper" ? false : true;//Checking if the user will win by choosing rock or not.
        }
        else if(userChoice==="paper"){
            //scissor or rock 
            userWin = compChoice === "scissor" ? false : true;//Checking if the user will win by choosing paper or not.
        }
        else{
            //rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}

//
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});