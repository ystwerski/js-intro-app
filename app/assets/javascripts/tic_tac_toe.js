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

    gameOver();
  }
}

function switchTurns() {
  if (currentTurn === "x") {
    currentTurn = "o";
  } else {
    currentTurn = "x";
  }
}

function gameOver() {
  alert(currentTurn.toUpperCase() + " wins!");
}

function updateDisplay(space) {
  space.className += " " + currentTurn;
}

function fillSpace(spaceId, space) {
  if (!spaces[spaceId]) { // a blank string ("") is falsy in JS!
    assignSpace(spaceId);
    console.log(spaces);
    updateDisplay(space);
    checkIfWon();
    switchTurns();
  }
}
