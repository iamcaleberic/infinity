var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;

function writeWaitingPercent(p) {
	// body...

	process.stdout.clearline(); // clears current stdout output 
	process.stdout.cursorTo(0);// move cursor to beginning of line
	process.stdout.write(`waiting ... ${p}`);
}

var interval = setInterval(function(){
	
	currentTime += waitInterval;

	console.log(`waiting ${currentTime/1000} seconds...`);
},waitInterval)

setTimeout(function(){


	clearInterval(interval); // Stop after time runs out
	console.log("Finito");

}, waitTime)