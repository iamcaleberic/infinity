var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;

console.log("Boom");

var interval = setInterval(function(){
	
	currentTime += waitInterval;

	console.log(`waiting ${currentTime/1000} seconds...`);
},waitInterval)

setTimeout(function(){


	clearInterval(interval);
	console.log("Finito");

}, waitTime)