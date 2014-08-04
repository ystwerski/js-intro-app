$(function() {
  playGame();
});

var spaces = ["", "", "", "", "", "", "", "", ""];
var currentTurn = "x";

function assignSpace(spaceId) {
  spaces[spaceId] = currentTurn;
}

function checkIfWon() {
  if((spaces[0] && spaces[0] == spaces[1] && spaces[1] == spaces[2]) ||
     (spaces[3] && spaces[3] == spaces[4] && spaces[4] == spaces[5]) ||
     (spaces[6] && spaces[6] == spaces[7] && spaces[7] == spaces[8]) ||
     (spaces[0] && spaces[0] == spaces[3] && spaces[3] == spaces[6]) ||
     (spaces[1] && spaces[1] == spaces[4] && spaces[4] == spaces[7]) ||
     (spaces[2] && spaces[2] == spaces[5] && spaces[5] == spaces[8]) ||
     (spaces[0] && spaces[0] == spaces[4] && spaces[4] == spaces[8]) ||
     (spaces[2] && spaces[2] == spaces[4] && spaces[4] == spaces[6])) {

     alert(currentTurn.toUpperCase() + " won!");
  }
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
    if (!spaces[spaceId]) {
      assignSpace(spaceId);
      console.log(spaces);
      updateDisplay();
      checkIfWon();
      switchTurns();
    }
  });
}
