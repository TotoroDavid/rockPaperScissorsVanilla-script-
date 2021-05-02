"use strict";

var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_div = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComputerChoice() {
  var choices = ['r', 'p', 's'];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  var smallUserWord = "user".fontsize(3).sub();
  var smallCompWord = "comp".fontsize(3).sub();
  var userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = "".concat(convertWord(userChoice), " ").concat(smallUserWord, " beats ").concat(convertWord(computerChoice), " ").concat(smallCompWord, "  you win!! ");
  userChoice_div.classList.add('green-glow');
  setTimeout(function () {
    userChoice_div.classList.remove('green-glow');
  }, 500);
}

function lose(userChoice, computerChoice) {
  var smallUserWord = "user".fontsize(3).sub();
  var smallCompWord = "comp".fontsize(3).sub();
  var userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = "".concat(convertWord(userChoice), " ").concat(smallUserWord, " loses to  ").concat(convertWord(computerChoice), " ").concat(smallCompWord, "  you lose...!! ");
  userChoice_div.classList.add('red-glow');
  setTimeout(function () {
    userChoice_div.classList.remove('red-glow');
  }, 500);
}

function draw(userChoice, computerChoice) {
  var smallUserWord = "user".fontsize(3).sub();
  var smallCompWord = "comp".fontsize(3).sub();
  var userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = "".concat(convertWord(userChoice), " ").concat(smallUserWord, " equals  ").concat(convertWord(computerChoice), " ").concat(smallCompWord, "  It's a draw.  ");
  userChoice_div.classList.add('gray-glow');
  setTimeout(function () {
    userChoice_div.classList.remove('gray-glow');
  }, 500);
}

function game(userChoice) {
  var computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;

    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;

    case "pp":
    case "ss":
    case "rr":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
//# sourceMappingURL=main.dev.js.map
