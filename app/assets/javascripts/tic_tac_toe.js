$(function() {
  playGame();
});

var spaces = ["", "", "", "", "", "", "", "", ""];
var currentTurn = "x";

function assignSpace(spaceId) {
  spaces[spaceId] = currentTurn;
}


function checkIfWon() {

}

function switchTurns() {
  currentTurn = currentTurn == "x" ? "o" : "x";
}

function updateDisplay() {
  for(var i = 0; i < 9; i++) {
    $("#" + i).addClass(spaces[i]);
  }
}

function playGame() {
  $(".block").click(function() {
    var spaceId = parseInt($(this).attr("id"));
    assignSpace(spaceId);
    console.log(spaces);
    updateDisplay();
    checkIfWon();
    switchTurns();
  });
}
