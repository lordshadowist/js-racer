window.onload = function()
{
	var red = document.getElementById("red");
	var blue = document.getElementById("blue");
	window.addEventListener("keydown", function(){
		if(event.key == "z")
		{
			move(red);
			checkForWin(red);
		}
		if(event.key == "m")
		{
			move(blue);
			checkForWin(blue);
		}
	});
	// Functions
	function move(thing)
	{
		var moveRight = thing.offsetLeft - 8;
		moveRight += 10; //move 10 spaces	
		thing.style.left = moveRight + "px";
		console.log(thing.style.background);
	}

	function checkForWin(thing)
	{
		var frontEdge = thing.offsetLeft + 50;
		var finishLine = document.getElementById("finishLine");
		if(frontEdge >= finishLine.offsetLeft)
		{
			var scoreboard = document.getElementById("winner");
			scoreboard.style.color = thing.id;
			scoreboard.innerHTML = thing.id + " Wins!";
			gameReset()
		}
	}

	function gameReset()
	{
		red.style.left = 0;
		blue.style.left = 0;
	}
}