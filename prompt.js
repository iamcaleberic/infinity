var readline =  require('readline');

var rl = readline.createInterface(process.stdin , process.stdout);

rl.question("What robot disguised person do you know? " , function(answer) {

	console.log(answer);
})