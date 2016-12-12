var grid = [0,0,0,0,0,0,0,0,0];
var activePlayer = 1;


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
    return grid[0];
  }
  if ((grid[3] === grid[4]) && (grid[3] === grid[5]) && (grid[3] !== 0)){
    console.log('middle row win');
    return grid[3];
  }
  if ((grid[6] === grid[7]) && (grid[6] === grid[8]) && (grid[6] !== 0)){
    console.log('bottom row win');
    return grid[6];
  }
  if ((grid[0] === grid[3]) && (grid[0] === grid[6]) && (grid[0] !== 0)){
    console.log('left column win');
    return grid[0];
  }
  if ((grid[1] === grid[4]) && (grid[1] === grid[7]) && (grid[1] !== 0)){
    console.log('middle column win');
    return grid[1];
  }
  if ((grid[2] === grid[5]) && (grid[2] === grid[8]) && (grid[2] !== 0)){
    console.log('right column win');
    return grid[2];
  }
  if ((grid[0] === grid[4]) && (grid[0] === grid[8]) && (grid[0] !== 0)){
    console.log('diagonal win');
    return grid[0];
  }
  if ((grid[2] === grid[4]) && (grid[2] === grid[6]) && (grid[2] !== 0)){
    console.log('diagonal win');
    return grid[2];
  }
  for (var i = 0; i <grid.length; i++) {
    if (grid[i] === 0) {
      console.log('game ongoing');
      return 0;
    } else {
      console.log('draw');
      return 3;
    }
  }
}

function isGameOver() {
//It should return a true or false if the game is over.

if (whoWon() === 0) {
    return false
  } else {
  return true
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
