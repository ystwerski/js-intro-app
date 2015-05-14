var winningBox = Math.floor((Math.random() * 100) + 1); // Picks a random number between 1 and 3:


function guessBox(boxNumber, div) {

  if (boxNumber === winningBox) {
    alert("You win!");
    div.style["background-color"] = "pink";
  } else {
    console.log("wrong");
    div.style["background-color"] = "yellow";
  }

}


