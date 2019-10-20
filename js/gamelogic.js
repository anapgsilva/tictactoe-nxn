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

  gamePlays: [], //stores boardGame and after each play, positions will be replaced by P1 or P2 or Tie

  isWinner: function(ttt) {
    switch(true) {
    case ttt[0].toString() === ttt[1].toString() && ttt[1].toString() === ttt[2].toString():
    return true;
    break;
    case ttt[3].toString() === ttt[4].toString() && ttt[4].toString() === ttt[5].toString():
    return true;
    break;
    case ttt[6].toString() === ttt[7].toString() && ttt[7].toString() === ttt[8].toString():
    return true;
    break;
    case ttt[0].toString() === ttt[3].toString() && ttt[3].toString() === ttt[6].toString():
    return true;
    break;
    case ttt[1].toString() === ttt[4].toString() && ttt[4].toString() === ttt[7].toString():
    return true;
    break;
    case ttt[2].toString() === ttt[5].toString() && ttt[5].toString() === ttt[8].toString():
    return true;
    break;
    case ttt[0].toString() === ttt[4].toString() && ttt[4].toString() === ttt[8].toString():
    return true;
    break;
    case ttt[2].toString() === ttt[4].toString() && ttt[4].toString() === ttt[6].toString():
    return true;
    break;
    default:
    return false;
    }
  },

  isTie: function (ttt) {
    let count = 0;
    for (let i = 0; i < ttt.length; i++) {
      if (ttt[i].toString() === "playerOne" || ttt[i].toString() === "playerTwo" || ttt[i].toString() === 'Tie') {
        count++;
      }
    }
    if (count === 9) {
      winner = "Tie";
      return true;
    }
    else {
      return false;
    }
  },

  //checks if game over with winner or tie
  isGameOver: function (currentPlayer, winner) {

    if (sizeOfBoard === 3) {
      if (this.gamePlays[0].length === 1) {
        winner = this.gamePlays[0];
        return true;
      } else {
      return false;
      }
    }

    if (sizeOfBoard === 9) {
      result = this.isWinner(this.gamePlays);
      if (result) {
        winner === currentPlayer;
        return true;
      }
      else if (result === false) {
        resultTie = this.isTie(this.gamePlays);
        if (resultTie) {
          winner = "Tie";
          return true;
        }
        else {
          return false;
        }
      }
    }
  },

  //checks if valid play, if valid then adds to player array of plays
  isValidPlay: function(currentPlay, currentPlayer, endGame) {
    if (endGame === false) {
      for (let i = 0; i < this.gamePlays.length; i++) {

        let ttt = [];
        ttt = this.gamePlays[i];
        const indexOfPlay = ttt.indexOf(currentPlay);

        if (indexOfPlay >= 0) {
          const play = ttt[indexOfPlay];
          tttNumber = i;
          currentTTT = ttt;
          currentTTT[indexOfPlay] = currentPlayer;
          console.log("play value is ", currentTTT[indexOfPlay]);
          return true;
        }
      }
    } else {
    console.log(`invalid play`);
    return false;
    }
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
