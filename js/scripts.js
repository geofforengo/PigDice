var Player1 = new Player;
var Player2 = new Player;

function Player(totalScore){
  this.totalScore = totalScore;
}
var rollDice = function() {
  return Math.floor((Math.random()*6)+1);
}

// console.log(Player.rollDice);


//UI Logic
$(document).ready(function(){


});








// Back-end Function
//Player Object
function Player(name) {
  this.name = name,
  this.gameScore = 0,
  this.roundScore = 0
}
//player clicks roll dice
//Die returns a random number between 1 and 6
Game.prototype.rollDie = function() {
  var roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
  //player rolls a 1
  if (roll === 1) {
    //round score goes to zero
    this.currentPlayer.roundScore = 0;
    //turn ends
    this.switchPlayer();
    alert(this.currentPlayer.name)
  } else {
    //That number is added to their round score
    this.currentPlayer.roundScore += roll;
  }
}

//player can click hold
Game.prototype.hold = function() {
  //round score is added to total score
  this.currentPlayer.gameScore += this.currentPlayer.roundScore;
  this.currentPlayer.roundScore = 0;
  console.log(this.currentPlayer.name);
  //turn ends
  if (this.currentPlayer.gameScore >= 100){
    displayWinner(this.currentPlayer.name);
  }
}

function displayWinner(winner){
  alert($("#" + winner + "name").text() + " wins!");
}



//Game Object
//2 players
function Game() {
  var player1 = new Player("player1");
  var player2 = new Player("player2");
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = this.player1;
  //The game has a max score
}
//turn ends
Game.prototype.switchPlayer = function() {
  if (this.currentPlayer === this.player1) {
  this.currentPlayer = this.player2;
  } else if (this.currentPlayer === this.player2) {
  this.currentPlayer = this.player1;
  }
}


//UI function

$(document).ready(function(){
  var game = new Game();
  $("#newGame").click(function(event){
    event.preventDefault();
    var player1 = new Player($("input#player1Name").val());
    var player2 = new Player($("input#player2Name").val());

    $("#player1name").text(player1.name);
    $("#player2name").text(player2.name);
  });
  $("#roll").click(function(){
    game.rollDie();
    $("#round").text(game.currentPlayer.roundScore)
  });
  $("#hold").click(function(){
    game.hold();
    $("#round").text(game.currentPlayer.roundScore);
    $("#" + game.currentPlayer.name).text(game.currentPlayer.gameScore);
    game.switchPlayer();

  });
});
