var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var dice1 = document.querySelector(".img1")
var dice2 = document.querySelector(".img2")

var imagePlayerOne = "images/dice" + randomNumber1 + ".png";
var imagePlayerTwo = "images/dice" + randomNumber2 + ".png";

dice1.setAttribute("src", imagePlayerOne)
dice2.setAttribute("src", imagePlayerTwo)

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML= "🚩 Player1 Wins";
}
  else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML= "Player2 Wins 🚩";
  }
  else {
    document.querySelector("h1").innerHTML= "Draw!";
  }
