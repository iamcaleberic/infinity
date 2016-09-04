var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;
var percentWaited = 0 ;

function writeWaitingPercent(p) {
	// body...

	process.stdout.clearLine(); // clears current stdout output 
	process.stdout.cursorTo(0);// move cursor to beginning of line
	process.stdout.write(`waiting ... ${p}`);
}

var interval = setInterval(function(){
	
	currentTime += waitInterval;
	percentWaited = Math.floor((currentTime/waitTime) * 100); 
	writeWaitingPercent(percentWaited);

},waitInterval)

setTimeout(function(){
	clearInterval(interval); // Stop after time runs out
	writeWaitingPercent(100);
	console.log("Finito");

}, waitTime);

process.stdout.write("\n\n\n");

writeWaitingPercent(percentWaited);