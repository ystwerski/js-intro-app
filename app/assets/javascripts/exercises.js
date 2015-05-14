// // // Exercise #1:

// // Do the NASA countdown through the console. That is, the console should say:

// // 10
// // 9
// // 8
// // 7
// // 6
// // 5
// // 4
// // 3
// // 2
// // 1
// // BLASTOFF!

// // Hint: Use a for loop!

// for(var i = 10; i > 0; i--){
// 	console.log(i);
// }
// console.log("BLASTOFF!");
// // // Exercise #2:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// // Write some code that prints all the numbers in the 'numbers' array to the console.

// // Hint: Use a for loop!
// for(var i = 0; i < numbers.length; i++){
// 	console.log(numbers[i]);
// }

// // // Exercise #3:

// // Write code that finds the average of all the numbers in the 'numbers' array.
// // Hint: Use a for loop!
// var total = 0
// for(var i = 0; i < numbers.length; i++){
// 	total += numbers[i];
// }
// console.log(total / numbers.length);

// // // Exercise #4:

// // Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// // But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// // For numbers which are multiples of both three and five print "FizzBuzz".

// for(var i = 0; i < 101; i++){
// 	if (i % 3 === 0 && i % 5 === 0 && i !== 0){
// 		console.log("fizzbuzz");
// 	}
// 	else if (i % 3 === 0 && i !== 0){
// 		console.log("fizz");
// 	}
// 	else if (i % 5 === 0 && i !== 0){
// 		console.log("buzz");
// 	}
// 	else {
// 		console.log(i);
// 	}
// }

// // // Exercise #5:

// // Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// // For example:
// // var guess = prompt("Guess a number");
// var key = Math.floor(Math.random() * 100 + 1)
// console.log(key);
// response = prompt("Guess a number 1-100");
// response = parseInt(response);
// var time_out = 1
// while (response !== key && time_out < 10){
// 	if (response > key){
// 		response = prompt("That was too high! Try another guess but lower this time. You have " + (10 - time_out) + " guesses remaining.");
// 		response = parseInt(response);
// 	}
// 	else if (response < key){
// 		response = prompt("That was too low! Try another guess but higher this time. You have " + (10 - time_out) + " guesses remaining.");
// 		response = parseInt(response);
// 	}
// 	time_out++;
//  	if (response === key){
// 		alert("You're a winner!!");

// 	}
// }

// if (response !== key){
// 	alert("BOO HOO. YOU LOOSE!");
// }

// // // Exercise #6:

// // Create a function that accepts two numbers as parameters and returns their sum.

// function add(numberOne, numberTwo){
// 	return numberOne + numberTwo;
// }

// console.log(add(499, 1));


// // // Exercise #7:

// // Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)
// average = function(array){
// 	var total = 0
// 	for(var i = 0; i < array.length; i++){
// 		total += array[i];
// 	}
// 	return (total / array.length);
// }

// console.log(average([30,40]));

// // // Exercise #8:

// // Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.

// var book = {
// 	title: "Exiles of crocidile island",
// 	author: "Unknown",
// 	isbn: 43895093503,
// 	pages: 249,
// 	yearOfPublication: "05/17/1648",
// 	giveMeAll: function(){
// 		console.log("Title: " + this.title);
// 		console.log("Author: " + this.author);
// 		console.log("ISBN " + this.isbn);
// 		console.log("Pages: " + this.pages);
// 		console.log("Published on: " + this.yearOfPublication);
// 	}
// }

// book.giveMeAll();
// // book.eraseIt();
// // // Exercise #9:

// // Add a function to the above book object that console.logs out all the above information 

// // // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html 


