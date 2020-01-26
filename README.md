# Tic-Tac-Toe

[Open it here](https://anapgsilva.github.io/tictactoe-nxn/).

This project was built as part of the Software Engineering Immersive Course at General Assembly, Sydney.

> This game is a classic that takes seconds to learn but minutes to master!

#### How to play the game

The players take turns playing their avatar and the winner is the first to have three of their symbols in a row, in a column or in a diagonal.

The players can choose their own marker/avatar from a drop down menu. The score is tracked for each player, and the board game can be reset by pressing "reset" button. To start a whole new game with scores at zero, just reload your page in the browser.


#### Board game

<img src="https://anapgsilva.github.io/tictactoe/images/ttt.png" width="500">


#### Game design

I used HTML, CSS, JavaScript and jQuery to build the game.

After building the classic 3x3 Tic-Tac-Toe, I built a version that the user could choose the board size.

Started by building the HTML/CSS page to have a simple board to check the code. Then I wrote the game logic as an object (the game) that contained properties and methods.

The board game property was generated from a function dependent on the user selected board size. This board game is then an array of arrays. Each child array corresponds to each 3x3 game, with nine items/position value - coordinate if empty or the player id if played.

To check if each game had a winner I ran a function that would look into each array item and see if it would fulfill the winning combinations (equal row, column or diagonal). If there was a winner, the whole array would be substituted by either the winning player, otherwise if maximum number of plays were reached it would be substituted by "Tie".
For the 9x9 version, the winning function is ran on the board game parent array to find a final winner.

Methods that were generated for the game were to check if play is valid, if the game was over, to find the next player and to reset the game.

After I had the game logic (JS) outlined, I then worked on the document manipulation using jQuery, to set event listeners, initialise the game and update the board game after every play.

At the end, I improved the interactivity of the game by adding the option of different avatars and some animations.

I used three open source animations. Text animations were from https://daneden.github.io/animate.css/. The popup window was adapted from code existent in https://www.w3schools.com/howto/howto_js_popup.asp. Fireworks were adapted from a pen by Eddie Lin (taken from CodePen, https://codepen.io/yshlin/pen/ylDEk) in SCSS, and compiled to CSS using https://www.cssportal.com/scss-to-css/.
