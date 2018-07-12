function computerPlay() {
    var result = Math.random();
    result < 0.4 ? result = 'Rock' : result < 0.6 ? result = 'Paper' : result = 'Scissors'
    return result
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
    console.log(result[0]);
    return result[1];
};
function game() {
    var computerScore =0;
    var playerScore = 0;
    for(var i=0;i<5;i++) {
        var playerInput = prompt('Enter Rock Paper or Scissors','');
        var computerSelect = computerPlay();
        var answer = playRound(playerInput,computerSelect,playerScore,computerScore);
        if(answer== 1) playerScore+=1;
        if(answer == -1) computerScore+=1;
    }
    return computerScore>playerScore ? 'Computer Wins!' : computerScore<playerScore ? 'Player Wins!' : 'It\'s a Tie!';
}
