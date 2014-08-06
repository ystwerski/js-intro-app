var abcs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var placeHolder = 0;

function clickLetter(letterBox) {
  var letter = letterBox.innerHTML;
  if(letter === abcs[placeHolder]) {
    placeHolder++;
    letterBox.style.visibility = "hidden";
  }
  if(placeHolder == 26) {
    alert("You win!");
  }
}