var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;

console.log("Boom");

setInterval(function(){
	currentTime += waitInterval;

	console.log(`waiting ${currentTime/1000} seconds...`);
})

setTimeout(function(){

	console.log("Finito");

}, waitTime)