var fs =  require("fs");

var md = `
	
World cities
=============

European cities
--------------
* Paris 
* Berlin
* Stockholm

`;

fs.writeFile('city.md' , md.trim() , function(err) {
	
	console.log("File created");
});