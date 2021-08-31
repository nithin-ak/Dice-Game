var randomNumber1 = Math.floor(Math.random() * 6) + 1; /* Generate random number between 1-6 */
var randomNumber2 = Math.floor(Math.random() * 6) + 1; /* Generate random number between 1-6 */

document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1===randomNumber2){
var titletext = "Draw";
} else if(randomNumber1>randomNumber2){
  titletext = "🚩Player 1 Wins!"
} else {
  titletext = "Player 2 Wins 🚩"
}

document.querySelector("h1").innerHTML = titletext;
