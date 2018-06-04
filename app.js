//Variables
let scores, roundScores, activePlayer, gamePlay, lastDice;

init();




document.querySelector(".btn-roll").addEventListener("click", function() {
    // Act on the event 
    if (gamePlay) {

        //random number
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;

        //display the result
        document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-2").style.display = "block";
        document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
        document.getElementById("dice-2").src = "dice-" + dice2 + ".png";


        //player looses his ENTIRE score when he rolls two 6 in a row
        /*if(dice===6 && lastDice ===6){
        	roundScores[activePlayer] = 0;
        	document.querySelector("#score-" + activePlayer).textContent = 0;
        	nextPlayer();


        }*/
        //update the round score if the rolled number is not a 1
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScores += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;
        } else {
            //Next player
            nextPlayer();
        }
    }
});


//button hold event listener

document.querySelector(".btn-hold").addEventListener("click", function() {
    // Act on the event
    if (gamePlay) {
        //add current score to global score
        scores[activePlayer] += roundScores;




        //update the UI
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        let input = document.querySelector(".final-score").value;
        let winningScore;

        //all the values that are Undefined,0,null or "" are coerced to false
        //anything else is coerced to true
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }



        //check if the player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById("dice-1").style.display = "none";
            document.getElementById("dice-2").style.display = "none";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlay = false;


        } else {
            nextPlayer();

        }

    }

});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
}

document.querySelector('.btn-new').addEventListener('click', init);



//function to initializing  the game
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScores = 0;
    gamePlay = true;

    //To not show the dice before the game starts
    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";

    //Get element by ID to set the starting score to Zero
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}




