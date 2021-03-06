
//roll 1
var randomNumber1 = Math.floor((Math.random() * 6) + 1); //integer between 1 amd 6. including both 1 and 6.
var randomDiceImage = "dice" + randomNumber1 + ".png"; //adding the random number to the string
var randomImageSource = "images/" + randomDiceImage; // adding images file soutce to the string.
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
//rol 2
var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);
//Change title to the winners name.
if(randomNumber1 > randomNumber2){
  var title = document.querySelector("h1");
  title.innerHTML=("Player 1 WINS!");
}
else if (randomNumber1 < randomNumber2) {
  var title = document.querySelector("h1");
  title.innerHTML=("Player 2 WINS!");
}
else {
  var title = document.querySelector("h1");
  title.innerHTML=("Draw!");
}
