var readline =  require('readline');
var rl = readline.createInterface(process.stdin , process.stdout);
var fs = require("fs");
var realNigga = {
	name: '',
	sayings: []
};

rl.question("What robot disguised person do you know? " , function(answer) {
	
	realNigga.name = answer;

	fs.writeFileSync(realNigga.name + ".md" , `${realNigga.name}\n==========\n\n`)

	rl.setPrompt(`What would ${realNigga.name} say?`);
	
	rl.prompt();

	rl.on('line', function(saying) {
		realNigga.sayings.push(saying.trim());

		fs.appendFile(realNigga.name + ".md" , `* ${saying.trim()} \n`);

		if (saying.toLowerCase().trim() === 'exit'){
			rl.close();
		} else{
			rl.setPrompt(`What else would ${realNigga.name} say? ('exit' to leave)`);

			rl.prompt();
		}
		
	})


});

rl.on('close' , function(){

	console.log("%s is a real person that says %j", realNigga.name , realNigga.sayings);
	process.exit();
})