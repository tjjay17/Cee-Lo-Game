var randomnumber1 = 0;
var randomnumber2 = 0;
var randomnumber3 = 0;
var pathway1 = "";
var pathway2 = "";
var pathway3 = "";

var pic1 = document.querySelector(".dice1");
var pic2 = document.querySelector(".dice2");
var pic3 = document.querySelector(".dice3");
var button = document.querySelector(".Roll");
var winner = document.querySelector("h1");

function rollbutton(){
  randomnumber1 = Math.floor(Math.random() * 6 + 1);
  randomnumber2 = Math.floor(Math.random() * 6 + 1);
  randomnumber3 = Math.floor(Math.random() * 6 + 1);

  pathway1 = "dice" + randomnumber1 + ".png";
  pathway2 = "dice" + randomnumber2 + ".png";
  pathway3 = "dice" + randomnumber3 + ".png";

  pic1.setAttribute("src", pathway1);
  pic2.setAttribute("src", pathway2);
  pic3.setAttribute("src", pathway3);


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

}

rollbutton();





button.addEventListener("click",rollbutton);
