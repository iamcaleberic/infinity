var fs = require('fs'); 

fs.readdir('./lib', function(err, files) {

	if (err){
		throw err;
	}

	console.log(files)

});

console.log("Reading files...");

// using sync instead of async has its own drawbacks
