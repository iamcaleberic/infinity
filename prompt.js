var readline =  require('readline');
var rl = readline.createInterface(process.stdin , process.stdout);

var realNigga = {
	name: '',
	sayings: []
};

rl.question("What robot disguised person do you know? " , function(answer) {
	realNigga.name = answer;

	rl.setPrompt(`What would ${realNigga.name} say?`);
	
	rl.prompt();

	rl.on('line', function(saying) {
		console.log(saying.trim());
	})

	console.log(answer);
});