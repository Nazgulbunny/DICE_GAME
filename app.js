/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Variables
//const scores,roundScores,activePlayer,dice;

let scores =[0,0];

let roundScores = 0;

let activePlayer = 1;

 

//To not show the dice before the game starts
document.querySelector(".dice").style.display = "none";

//Get element by ID to set the starting score to Zero
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-0").textContent = "0";


document.querySelector(".btn-roll").addEventListener("click",function() {
	/* Act on the event */
	//random number
	let dice = Math.floor(Math.random() * 6) + 1;
    //display the result
    let diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";


    //update the round score if the rolled number is not a 1



});





//built in Math function to get anumber between one and six

/*let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);*/

//query selector to put the dice roll in the right place
//document.querySelector("#current-" + activePlayer).textContent = dice;