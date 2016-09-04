var fs = require("fs"); 

var contents = fs.readFileSync("./lib/parle.md" , "UTF-8");

console.log(contents);