var fs = require("fs"); 

fs.readFile("./lib/parle.md" , "UTF-8" , function(err , contents) {

	if (err){
		console.log(err);
	}
	
	console.log(contents);

});

