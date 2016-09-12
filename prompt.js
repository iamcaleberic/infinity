var readline =  require('readline');
var rl = readline.createInterface(process.stdin , process.stdout);
var fs = require("fs");
var realNigga = {
	name: '',
	sayings: []
};

rl.question("What robot disguised person do you know? " , function(answer) {
	
	realNigga.name = answer;

	var stream =  fs.createWriteStream(realNigga.name + ".md");

	stream.write(`${realNigga.name}\n=============\n\n`);

	// fs.writeFileSync(realNigga.name + ".md" , `${realNigga.name}\n==========\n\n`)

	rl.setPrompt(`What would ${realNigga.name} say?`);
	
	rl.prompt();

	rl.on('line', function(saying) {
	
		// fs.appendFile(realNigga.name + ".md" , `* ${saying.trim()} \n`);

		if (saying.toLowerCase().trim() === 'exit'){
			stream.close();
			rl.close();
		} else{
			realNigga.sayings.push(saying.trim());
			stream.write(`*${saying.trim()}\n`);
			rl.setPrompt(`What else would ${realNigga.name} say? ('exit' to leave)`);
			
			rl.prompt();
		}
		
	})


});

rl.on('close' , function(){

	console.log("%s is a real person that says %j", realNigga.name , realNigga.sayings);
	process.exit();
})