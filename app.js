// Objects defining players one and two by initializing a zero score, and query selecting the id's of their individual buttons and displays from the HTML doc
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

// Query selecting the 'Reset' button, and the 'Playing To' dropdown menu from the HTML doc and assigning each to a variable
const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

// setting variables to initialize a false 'Game Over' and that the game is defaulted to a winning score of '3' to align with the winningScoreSelect variable whose first option is also '3'
let winningScore = 3;
let isGameOver = false;

// this function determines if the game is over by checking whether the player or opponents real time score is equal to the winningScore selected, after the player or opponents score is updated caused by the event listeners on their buttons when'clicked' to activate and call on this function.  If the game is over, winner's score will display green, and the loser will display red. The player and opponent buttons are also disabled until the game is 'reset'
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    } 

}

// the event listeners which call upon updateScores when clicked
p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame()
})

resetBtn.addEventListener('click', resetGame)

function resetGame() {
    isGameOver = false;
    for (let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}