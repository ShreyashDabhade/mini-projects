let yourScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yourScorepara = document.querySelector("#your-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{

    const options = ["rock", "paper", "scissors"];
    const randomValue = Math.floor(Math.random() * 3);
    return options[randomValue];
}

const draw = () =>{
    console.log("It was a draw");
    msg.innerText = "It was a draw";
    msg.style.backgroundColor = "#081b31" ;
}

const finalResult = (userwin,userChoice,compChoice) =>{
    if(userwin){
        console.log("you win");
        msg.innerText = `You win!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        yourScore++;
        yourScorepara.innerText = yourScore;
    }else{
        console.log("you lose");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorepara.innerText = compScore;
    }
}

const playgame = (userChoice) => {
    console.log("click option",userChoice);

    const compChoice = genCompChoice();
    console.log("comp option",compChoice);

    if(userChoice===compChoice){
        draw();
    }else
    {
        let userwin = true;
        
        if(userChoice==="rock"){
            userwin = compChoice === "paper" ? false : true;
        }else if(userChoice ==="paper"){
            userwin = compChoice === "scissors" ? false : true;
        }else{
            userwin = compChoice === "rock" ? false : true;
        }
        finalResult(userwin,userChoice,compChoice);
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
      
        playgame(userChoice);
    })
});
    