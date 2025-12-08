// ======= TEXT DISPLAY ======
//computer choice text display
const computerChoiceDisplay = document.getElementById("comp-choice");
//user choice text display
const userChoiceDisplay = document.getElementById("user-choice");
//results text display
const resultDisplay = document.getElementById("result");



//target buttons
const buttons = document.querySelectorAll("button");

// on click function
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //choices const
    const userChoice=button.id;
    const computerChoice=playGame();

    //console log
    console.log("user choice:", userChoice.charAt(0).toUpperCase() + userChoice.slice(1), "\ncomputer choice:", computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));

    //create round and log result
    const result=playRound(userChoice, computerChoice);
    console.log(result);

    //show text on page

    userChoiceDisplay.textContent = userChoice.charAt(0).toUpperCase()+ userChoice.slice(1);
    computerChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    resultDisplay.textContent = result;
  });
});




// ======= FUNCTION ======
// random computer choice  
function playGame(){
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random()* 3);
  return choices[computerChoice];
  }
// play round
function playRound(userChoice, computerChoice){
  if (userChoice === computerChoice){
    return "It's a tie!";
  }
  else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")){
    return "You win!\r\n" + userChoice.charAt(0).toUpperCase()+ userChoice.slice(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) +"!";
    }
    else {
    return "You lose :(\r\n" + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + userChoice.charAt(0).toUpperCase()+ userChoice.slice(1) +"!";
    }
  
}


