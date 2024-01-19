var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImage = "dice" + randomNumber1 + ".png";
var folderImages = "images/" + diceImage;
var image1 = document.querySelectorAll("img")[0];
var imageRef = image1.setAttribute("src", folderImages);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImages2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImages2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🔥Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins🔥";
}
else{
    document.querySelector("h1").innerHTML = "Draw🤷‍♂️";
}