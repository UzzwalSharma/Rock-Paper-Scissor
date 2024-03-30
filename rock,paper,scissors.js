const user_score = document.getElementById("user_score");
const comp_score = document.getElementById("Computer_scorecard");

const choices = document.querySelectorAll(".Choice");
let chancesound = new Audio("game-bonus-144751.mp3");
let outsound = new Audio("negative_beeps-6008.mp3");
let drawsound = new Audio("sinister-laugh-140131.mp3");
let winner;
const msg = document.getElementById("msg");
const winbox = document.querySelector(".winner");
// Finding choice of the computer
const compChoice = () => {
  const options = ["Rock", "Paper", "Scissor"]; // Corrected capitalization
  const index = Math.floor(Math.random() * 3);
  return options[index];
};
//winner deciding function

const showwinner = (winner, userChoice, computerChoice) => {
  if (winner === true) {
    console.log("You win");
    msg.innerText = `${userChoice} beats ${computerChoice} You win!`;
    winbox.style.backgroundColor = "#32CD32";
    user_score.innerText++;
    chancesound.play("chancesound");
  } else if (winner === false) {
    console.log("Computer wins");
    msg.innerText = "You loose";
    winbox.style.backgroundColor = " #FF6347";
    comp_score.innerText++;
    drawsound.play("sinister-laugh-140131.mp3");
    msg.innerText = ` ${computerChoice} beats ${userChoice} You loose!`;
  } else if (winner === 4) {
    console.log("It's a draw");

    msg.innerText = "Its a draw";
    winbox.style.backgroundColor = "blue";
    winbox.style.boxshadow = "box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);";
    outsound.play("outsound");
  }
};

// now making a function for gameplay
const gameLogic = (userChoice) => {
  const computerChoice = compChoice(); // Changed variable name and function call
  console.log(computerChoice);
  // const winner=true;
  if (userChoice === computerChoice) {
    console.log("draw");
    winner = 4; // Set winner to 4 for a draw
  } else if (userChoice === "Rock") {
    if (computerChoice === "Scissor") {
      console.log("user wins");
      winner = true;
    } else {
      console.log("computer wins");
      winner = false;
    }
  } else if (userChoice === "Scissor") {
    if (computerChoice === "Paper") {
      console.log("user wins");
      winner = true;
    } else {
      console.log("computer wins");
      winner = false;
    }
  } else if (userChoice === "Paper") {
    if (computerChoice === "Rock") {
      console.log("user wins");
      winner = true;
    } else {
      console.log("computer wins");
      winner = false;
    }
  }

  showwinner(winner, userChoice, computerChoice);
};

choices.forEach((Choice) => {
  Choice.addEventListener("click", () => {
    const choiceId = Choice.getAttribute("id");
    console.log(`${choiceId} is clicked`);
    const userChoice = choiceId;
    gameLogic(userChoice); // Corrected function name
  });
});
