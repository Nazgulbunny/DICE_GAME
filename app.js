/*YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/ 

//Variables

let scores, roundScores, activePlayer, gamePlay;

init();




document.querySelector(".btn-roll").addEventListener("click", function() {
    // Act on the event 
    if (gamePlay) {

        //random number
        dice = Math.floor(Math.random() * 6) + 1;
        //display the result
        diceDom = document.querySelector(".dice");
        diceDom.style.display = "block";
        diceDom.src = "dice-" + dice + ".png";


        //update the round score if the rolled number is not a 1

        if (dice !== 1) {
            //add score
            roundScores += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScores;


        } else {
            //next player ternary operator
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



        //check if the player won the game
        if (scores[activePlayer] >= 15) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
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

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);



//function to initializing  the game
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScores = 0;
    gamePlay = true;

    //To not show the dice before the game starts
    document.querySelector(".dice").style.display = "none";

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




