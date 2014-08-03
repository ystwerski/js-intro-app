var spaces = ["", "", "", "", "", "", "", "", ""];
var currentTurn = "X";

function assignSpace(spaceId) {
  spaces[spaceId] = currentTurn;
}

function updateDisplay() {

}

function checkIfWon() {

}

function switchTurns() {

}

$(function() {

  $(".block").click(function() {
    var spaceId = parseInt($(this).attr("id"));
    assignSpace(spaceId);
    console.log(spaces);
    updateDisplay();
    checkIfWon();
    switchTurns();
  });

});