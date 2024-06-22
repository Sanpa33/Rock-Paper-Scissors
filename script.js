function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){

  //This function will return “rock”, “paper” or “scissors”.
  let choice = getRandomInt(3);

  switch(choice){
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }

}

function getHumanChoice(){

  let question = prompt("Welcome to Paper rock or scissors, choose your option!");
  return question;
}

function playRound() {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();




    humanChoice = humanChoice.toLowerCase();
    computerChoice.toLowerCase();

    //All Paper combinations----------------------------------
    if(humanChoice === "paper" && computerChoice == "rock"){
      console.log("You win! Paper beats rock")
      humanScore++;
    }
    if(humanChoice === "paper" && computerChoice == "scissors"){
      console.log("You lose! Scissors beats paper")
      computerScore++;
    }
    if(humanChoice === "paper" && computerChoice == "paper"){
      console.log("Tie!")
    }
    //-------------------------------------------------------



    //All rock combinations----------------------------------
    if(humanChoice === "rock" && computerChoice == "paper"){
      console.log("You lose! Paper beats rock")
      computerScore++;
    }
    if(humanChoice === "rock" && computerChoice == "scissors"){
      console.log("You win! Rocks beats scissors")
      humanScore++;
    }
    if(humanChoice === "rock" && computerChoice == "rock"){
      console.log("Tie!");
    }
    //-------------------------------------------------------



    //All Scissors combinations------------------------------
    if(humanChoice === "scissors" && computerChoice == "rock"){
      console.log("You lose! Rocks beats scissors")
      computerScore++;
    }
    if(humanChoice === "scissors" && computerChoice == "paper"){
      console.log("You win! Scissors beats paper");
      humanScore++;      
    }
    if(humanChoice === "scissors" && computerChoice == "scissors"){
      console.log("Tie!");
    }
    //-------------------------------------------------------

}

function playGame(){
  
  let humanScore=0;
  let computerScore=0;

  playRound();
  playRound();


}


playGame();
