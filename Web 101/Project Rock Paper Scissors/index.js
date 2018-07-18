
function game() {
    var rounds = +document.querySelector('#container input[type="number"]').value;
    var playerScore=0;
    var computerScore=0;
    var modal = document.querySelector('.modal');
    var options = document.querySelector('.options');
    var resText = document.querySelector('.container__result')
    modal.style.display = 'block';
    options.style.display = 'block';

    function computerPlay(){
        var result = parseFloat(Math.random().toFixed(2));
      return  result < 0.3? 'rock' : result < 0.6 ? 'paper' : 'scissors';
    };

    function playRound(playerSelection,computerSelection) {
        var options = {
            'rock': {
                'rock': ["It's a Tie! Both Rocks.",0],
                'paper': ["You Lose! Paper beats Rock.",-1],
                'scissors': ['You Win! Rock beats Scissors.',1]
            },
            'paper':{
                'rock': ['You Win! Paper beats Rock.',1],
                'paper': ['It\'s a Tie! Both Paper.',0],
                'scissors': ['You Lose! Scissors beats Paper.',-1]
            },
            'scissors': {
                'rock': ['You Lose! Rock beats Scissors.',-1],
                'paper': ['You Win! Scissors beats Paper.',1],
                'scissors': ['It\'s a Tie! Both Scissors.',0]
            }
        };
        var result =options[playerSelection.toLowerCase()][computerSelection.toLowerCase()];
        resText.innerText = result[0];
        if(result[1] > 0) {
            playerScore+=1;
        }
        if(result[1] < 0) {
            computerScore+=1;
        }
        rounds-=1;
        if(rounds < 1)  {
            final();
        }
    };
    function makeChoice(event) {
       if(event.target.className !='rock' && event.target.className !='paper' && event.target.className !='scissors') return;
       var playerChoice = event.target.className;
       playRound(playerChoice,computerPlay(),playerScore,computerScore);
    };

    container.addEventListener('click',makeChoice);

    function final(){
        var msg='';
        playerScore > computerScore ? msg = 'You win!' : playerScore < computerScore ? msg = 'Computer win!' :  msg = 'It\'s a tie!';
        resText.innerText = msg;
        modal.style.display = 'none';
        options.style.display = 'none';
        container.removeEventListener('click',makeChoice);
    }
    
};

start.onclick = function() {
    game();
}
