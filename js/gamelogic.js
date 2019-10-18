//Object with game logic


const game = {
  // make boardMatrix 2D array
  makeBoardGame: function(sizeOfBoard) {
    let boardGame = [];
    for (let rowboard = 0; rowboard < sizeOfBoard/3; rowboard++) {
      for (let columnboard = 0;  columnboard < sizeOfBoard/3; columnboard++) {
        let row_array = [];
        for (let row = 0; row < 9; row++) {
          row_array.push(`${rowboard}${columnboard}${row}`);
        }
        boardGame.push(row_array);
      }
    }
    return boardGame;
  },

  gamePlays: [], //stores boardGame and after each play, positions will be replaced by P1 or P2

  isWinner: function(game) {
    switch(true) {
    case game[0] === game[1] && game[1] === game[2]:
    return true;
    break;
    case game[3] === game[4] && game[4] === game[5]:
    return true;
    break;
    case game[6] === game[7] && game[7] === game[8]:
    return true;
    break;
    case game[0] === game[3] && game[3] === game[6]:
    return true;
    break;
    case game[1] === game[4] && game[4] === game[7]:
    return true;
    break;
    case game[2] === game[5] && game[5] === game[8]:
    return true;
    break;
    case game[0] === game[4] && game[4] === game[8]:
    return true;
    break;
    case game[2] === game[4] && game[4] === game[6]:
    return true;
    break;
    default:
    return false;
    }
    //if it's a tie
    let count = 0;
    for (let i = 0; i < game.length; i++) {
      if (game[i] === "playerOne" || game[i] === "playerTwo") {
        count++;
      }
    }
    if (count === 9) {
      return 'Tie';
    }
  },


  //checks if game over with winner or tie
  isGameOver: function (currentPlayer) {
    console.log('size board', sizeOfBoard);
    for (let i = 0; i < this.gamePlays.length; i++) {
      // console.log(this.gamePlays[i]);
      result = this.isWinner(this.gamePlays[i]);
      // console.log(result);
      if (result === true) {
        this.gamePlays[i] = currentPlayer;
        singleGame = i;
      }
    }

    if (sizeOfBoard === 9) {
      result = this.isWinner(this.gamePlays)
      if (result === true) {
        winner = currentPlayer;
        return true;
      } else if (result === 'Tie'){
        winner = result;
        return true;
      }
    }
    else if (sizeOfBoard === 3 && (this.gamePlays[0] === 'playerOne' || this.gamePlays[0] === 'playerTwo' || this.gamePlays[0] === 'Tie')) {
        winner = this.gamePlays[0];
        return true;
    }
    return false;
  },

  //checks if valid play, if valid then adds to player array of plays
  isValidPlay: function(currentPlay, currentPlayer, endGame) {
    if (endGame === false) {
      for (let i = 0; i < this.gamePlays.length; i++) {
        const index = this.gamePlays[i].indexOf(currentPlay);

        if (index >= 0) {
          const play = this.gamePlays[i][index];
          if (play === 'playerOne' || play === 'playerTwo' || play === 'Tie') {
            console.log(`invalid play`);
            return false;
          }
          else {
          this.gamePlays[i][index] = currentPlayer;
          console.log("play value is ", this.gamePlays[i][index]);
          return true;
          }
        }
      }
    }
    return false;
  },

  //updates the next player if valid play and game not over
  nextPlayer: function(currentPlayer, validPlay, endGame) {
    if (validPlay === true && endGame === false) {
      if (currentPlayer === "playerOne") {
        return "playerTwo";
      }
      else if (currentPlayer === "playerTwo") {
        return "playerOne";
      }
    } else {
      return currentPlayer; //no action otherwise
    }
  },

  //resets boardgame, but not P1 and P2 scores
  resetGame: function() {
    this.gamePlays = [];
    currentPlayer = "playerOne";
    endGame = false;
    playerScore = 0;
    game.gamePlays = game.makeBoardGame(sizeOfBoard);
  }
}
