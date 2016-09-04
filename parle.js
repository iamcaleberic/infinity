var parle = [
	
	"I feel chemicals burning in my bloodstream",
	"Bicken back being bool",
	"Like a boss",
	"Silence is sometimes the most powerful weapon"


];

var interval =  setInterval(function() {

	var i =  Math.floor(Math.random() * parle.length);
	process.stdout.write(`${parle[i]} \n`);
} , 1000);
// when stdin receives data exit
process.stdin.on('data' , function(data) { 

	console.log(`STDIN Data Received -> ${data.toString().trim()}`);
	clearInterval(interval);
	process.exit();

});