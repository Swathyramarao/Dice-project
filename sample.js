var randomNumber1 = 0;
var randomNumber2 = 0;

function rollDiceForPlayer1() {
    randomNumber1 = Math.floor(Math.random() * 6) + 1; 
    var randomDiceImage = "img" + randomNumber1 + ".jpg"; 
    var randomImageSource = "Assets/" + randomDiceImage; 
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);
}

function rollDiceForPlayer2() {
    randomNumber2 = Math.floor(Math.random() * 6) + 1; 
    var randomDiceImage = "img" + randomNumber2 + ".jpg"; 
    var randomImageSource = "Assets/" + randomDiceImage; 
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource);
}

function checkWinner() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
