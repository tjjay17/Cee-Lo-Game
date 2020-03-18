var randomnumber1 = Math.floor(Math.random() * 6 + 1);
var pic1 = document.querySelector(".dice1");
var pathway1 = "images/dice" + randomnumber1 + ".png";

pic1.setAttribute("src", pathway1);

var randomnumber2 = Math.floor(Math.random() * 6 + 1);
var pic2 = document.querySelector(".dice2");
var pathway2 = "images/dice" + randomnumber2 + ".png";

var randomnumber3 = Math.floor(Math.random() * 6 + 1);
var pic3 = document.querySelector(".dice3");
var pathway3 = "images/dice" + randomnumber3 + ".png";

pic2.setAttribute("src", pathway2);
pic3.setAttribute("src", pathway3);

var winner = document.querySelector("h1");

if (randomnumber1 === randomnumber2 && randomnumber2 === randomnumber3 && randomnumber1 === randomnumber3){
  winner.textContent = "Triple " + randomnumber1;

}else if(randomnumber1 === randomnumber2) {
  winner.textContent = "Big " + randomnumber3;

}else if(randomnumber2 === randomnumber3){
  winner.textContent = "Big " + randomnumber1;

}else if(randomnumber1 === randomnumber3){
  winner.textContent = "Big " + randomnumber2;

}else if( randomnumber1 + randomnumber2 + randomnumber3 === 6){
  winner.textContent = 'You Lose!'

}else if (randomnumber1 + randomnumber2 + randomnumber3 === 15){
  winner.textContent = 'You Win!'
}else{
  winner.textContent = '🎲Roll again🎲'
}
