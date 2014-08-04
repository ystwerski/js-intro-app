// Picks a random number between 0 and 2:
var winningBox = Math.floor((Math.random() * 3));

// function guessBox(boxGuessed) {

//   if (boxGuessed === winningBox) {
//     alert("You win!");
//   } else {
//     console.log("wrong");
//   }

// }

// More advanced version:

var winningBox = Math.floor((Math.random() * 3));

function guessBox(boxGuessed, box) {

  if (boxGuessed === winningBox) {
    box.className = box.className + " right";
    document.getElementById("winning-message").innerHTML = "You win!";
  } else {
    box.className = box.className + " wrong";
  }

}





