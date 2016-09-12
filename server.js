var http = require("http");
var server = http.createServer(function(req , res){

    res.writeHead(200, {"Content-Type": "text/plain"});

    res.end("Hello World");

});

server.litsen(4000);
console.log("server is running on port 4000");  