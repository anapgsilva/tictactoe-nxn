//initiallize all variables
let currentPlayer = "playerOne";
let currentPlay; //2d position
let validPlay = false; //boolean
let endGame = false;
let playerScore = 0;
let sizeOfBoard; //input by user
let $currentPlay;
let setOfGames = [];
let winner = '';
let result; //boolean
let plays = [];
let singleGame; 


//will check game status
const render = function () {
  console.log("currentPlay is", currentPlay);

  //check if valid play
  validPlay = game.isValidPlay(currentPlay, currentPlayer, endGame);
  console.log(`is valid `, validPlay);
  //updates play with image
  if (validPlay) {
    //choose avatars
    avatar = chooseAvatar(currentPlayer);
    //checks if game finished
    endGame = game.isGameOver(currentPlayer);
    console.log("game over is ", endGame);

    if (sizeOfBoard === 9) {
      let i = String(parseInt(singleGame, 3));
      console.log('i is', i);
      // $('.columnBoard').css('background-image', ""$currentPlay.css("background-image'");
      singleGame = undefined;
    }

  }
  console.log('winner is', winner);
  if (endGame === true && playerScore === 0){
      //If GAME OVER, show message
      $(".gameStatus h3").removeClass('hidden');

      //updates score P1
      if (winner === "playerOne") {
        $('body').addClass('pyro');
        $('h2.turn').addClass('animated');
        $('h2.turn').addClass('jackInTheBox');
        $('h2.turn').html("Player 1 wins!");
        playerScore = +$('#playerOneScore').html() + 1;
        $('#playerOneScore').html(playerScore);
        highlighter(plays);
      }

      //updates score P2
      else if (winner === "playerTwo") {
        $('body').addClass('pyro');
        $('h2.turn').addClass('animated');
        $('h2.turn').addClass('jackInTheBox');
        $('h2.turn').html("Player 2 wins!");
        playerScore = +$('#playerTwoScore').html() + 1;
        $('#playerTwoScore').html(playerScore);
        highlighter(plays);
      }
      //if a tie
      else if (winner === 'Tie') {
        $('h2.turn').text("It's a tie.");
      }
    winner = '';
  }
  //updates next player
  currentPlayer = game.nextPlayer(currentPlayer, validPlay, endGame, winner);
  console.log('next player is', currentPlayer);
  //updates html player's turn
  if (endGame === false) {
    if (currentPlayer === "playerOne") {
      $('h2.turn').html("Player 1's turn");
    } else if (currentPlayer === "playerTwo") {
      $('h2.turn').html("Player 2's turn");
    }
  }
  //reinitialise variable
  validPlay = false;
}


//highlights winning plays
const highlighter = function(plays) {
  for (let i = 0; i < plays.length; i++) {
    let winPlay = plays[i];
    $(`#${winPlay}`).css('background-color', '#000');
  }
  return true;
}


//Avatar selection
let avatar;
const chooseAvatar = function(currentPlayer) {
  avatar = $('#avatar option:selected').text();

  if (avatar === "noughts vs crosses") {
    if (currentPlayer === "playerOne") {
      $currentPlay.css("background-image", "url('images/nought.png')");
    } else {
      $currentPlay.css("background-image", "url('images/cross.png')");
    }
  }
  else if (avatar === "dogs vs cats") {
    if (currentPlayer === "playerOne") {
      $currentPlay.css("background-image", "url('images/dog.png')");
    } else {
      $currentPlay.css("background-image", "url('images/grumpycat.png')");
    }
  }
  else if (avatar === "water vs fire") {
    if (currentPlayer === "playerOne") {
      $currentPlay.css("background-image", "url('images/water.png')");
    } else {
      $currentPlay.css("background-image", "url('images/fire.png')");
    }
  }
  else if (avatar === "day vs night") {
    if (currentPlayer === "playerOne") {
      $currentPlay.css("background-image", "url('images/sun.png')");
    } else {
      $currentPlay.css("background-image", "url('images/moon.png')");
    }
  }
}


//function to toggle About popup
const about = function() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


//get doc ready and set event listeners
$(document).ready(function () {

  const $sizeSelectButton = $('#sizeSelect');

  //get size of boardgame from selector
  $sizeSelectButton.on('click', function() {
    const $boardsize = $('.boardsize option:selected');
    sizeOfBoard = $boardsize.text();
    console.log("sizeOfBoard is", sizeOfBoard);

    if (sizeOfBoard === "3x3") {
      sizeOfBoard = 3;
    } else if (sizeOfBoard === "9x9") {
      sizeOfBoard = 9;
    }
    //make board game
    game.gamePlays = game.makeBoardGame(sizeOfBoard);

    //initialize array for each game (9 items each)
    let eachGame = [];
    //make each box in boardgame
    for (let rowboard = 0; rowboard < sizeOfBoard/3; rowboard++) {
      const $rowBoard = $('<div>');
      $rowBoard.addClass('rowBoard');

      for (let columnboard = 0;  columnboard < sizeOfBoard/3; columnboard++) {
        const $columnBoard = $('<div>');
        $columnBoard.addClass('columnBoard');

        //creates each box
        for (let row = 0; row < 9; row++) {
          const $row = $('<div>');
          $row.addClass('box').attr('id', `${rowboard}${columnboard}${row}`);

          //get each game as an array
          eachGame.push(`${rowboard}${columnboard}${row}`);
          $columnBoard.append($row);
          $rowBoard.append($columnBoard);

          //Event listeners for each box
          $row.on('click', function () {
            $currentPlay = $row;
            currentPlay = String($row.attr('id'));
            render();
          });
        }
      }
      $('.boardgame').append($rowBoard);

    }
    //Push each game into array set of games
    setOfGames.push(Array(eachGame));
    console.log("setOfGames is", setOfGames);

    //adjust size of each box
    $('.box').css('height', (550-(sizeOfBoard*9))/sizeOfBoard + 'px');
    $('.box').css('width', (550-(sizeOfBoard*9))/sizeOfBoard + 'px');

    if (sizeOfBoard === 9) {
      $('.columnBoard').css('width', '33%');
    }
    console.log("boxes built", $('.box'));
  });

  //resets game css
  $('#reset').on('click', function() {
    game.resetGame();
    $('.gameStatus h3').addClass('hidden');
    $('.box').css('background-image', '');
    $('.box').css('background-color', '');
    $('h2.turn').html("Player 1 starts");
    $('h2.turn').removeClass('animated');
    $('h2.turn').removeClass('jackInTheBox');
    $('body').removeClass('pyro');
  })

});
