var grid = [0,0,0,0,0,0,0,0,0];
var activePlayer = 1;
var gridClicked
var winner



function playTurn(index) {
  if (grid[index] === 0) {
    grid[index] = activePlayer
    console.log(activePlayer + 'made a move on ' + index);
    if (activePlayer === 1) {
      activePlayer = 2;
      console.log('Player 1 is now Player 2');
        } else {
            activePlayer = 1;
            console.log('player 2 is now player 1');
            }
    return true;
    }
  else {
    console.log('illegal move');
    return false;
  }
}

function whoWon() {
  console.log(grid);
  if ((grid[0] === grid[1]) && (grid[0] === grid[2]) && (grid[0] !== 0)){
    console.log('top row win');
    return winner = grid[0];
  }
  if ((grid[3] === grid[4]) && (grid[3] === grid[5]) && (grid[3] !== 0)){
    console.log('middle row win');
    return winner = grid[3];
  }
  if ((grid[6] === grid[7]) && (grid[6] === grid[8]) && (grid[6] !== 0)){
    console.log('bottom row win');
    return winner = grid[6];
  }
  if ((grid[0] === grid[3]) && (grid[0] === grid[6]) && (grid[0] !== 0)){
    console.log('left column win');
    return winner = grid[0];
  }
  if ((grid[1] === grid[4]) && (grid[1] === grid[7]) && (grid[1] !== 0)){
    console.log('middle column win');
    return winner = grid[1];
  }
  if ((grid[2] === grid[5]) && (grid[2] === grid[8]) && (grid[2] !== 0)){
    console.log('right column win');
    return winner = grid[2];
  }
  if ((grid[0] === grid[4]) && (grid[0] === grid[8]) && (grid[0] !== 0)){
    console.log('diagonal win');
    return winner = grid[0];
  }
  if ((grid[2] === grid[4]) && (grid[2] === grid[6]) && (grid[2] !== 0)){
    console.log('diagonal win');
    return winner = grid[2];
  }
  for (var i = 0; i <grid.length; i++) {
    if (grid[i] === 0) {
      console.log('game ongoing');
      return winner = 0;
    }
  }
    console.log('draw');
    return winner = 3;
}

function isGameOver() {
console.log(winner);
if (winner === 0) {
    return false
  } else {
  return true
  console.log('game over');
  }
}

// # restart()
// It should restart the game so it can be played again.

function restart () {
  for (var i = 0; i < grid.length; i++) {
    if (grid[i] > 0) {
      grid[i] = 0;
      activePlayer = 1;
    }
  }
}

function alertPlayTurn () {
  $('.pop-msg').empty();
  $('.pop-msg').css('visibility', 'visible')
  $('.pop-msg').append('Next move: ' + 'Player ' + activePlayer)
}

function alertWinner () {
  $('#winner-alert').empty();
  if (winner !== 3 ) {
  $('#winner-alert').css('visibility', 'visible')
  $('#winner-alert').append('Player ' + activePlayer + ' Won!')
    }
  if (winner === 3) {
    $('#winner-alert').css('visibility', 'visible')
    $('#winner-alert').append('Draw Game!')
  }
}


$('.grid').click(function() {
  gridClicked = ($(this).attr('id'));
  playTurn(gridClicked)
  isGameOver()
  alertPlayTurn(playTurn)
  })

  $('#restart').click(function() {
    restart()
    $('.pop-msg').empty();
    $('.pop-msg').css('visibility', 'visible')
    $('.pop-msg').append('Game restarted')
      })
