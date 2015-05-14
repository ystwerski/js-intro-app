var counter = 0;
function recordClick(div){
	counter++;
	if (counter === 5){
		alert("You Win!");
		counter = 0;
		function addText(div) {
  			box.innerHTML = "Hello!";
  			box.innerHTML = "green";
		};
	}
}