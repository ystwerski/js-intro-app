var rightAnswer = Math.floor((Math.random() * 3));

function guessNumber(numberGuessed) {

  if (numberGuessed === rightAnswer) {
    alert("You win!");
  } else {
    console.log("wrong");
  }

}

// // More advanced version:

// var rightAnswer = Math.floor((Math.random() * 3));

// function guessNumber(numberGuessed, box) {

//   if (numberGuessed === rightAnswer) {
//     box.className = box.className + " right";
//     alert("You win!");
//   } else {
//     box.className = box.className + " wrong";
//     console.log("wrong");
//   }

// }











