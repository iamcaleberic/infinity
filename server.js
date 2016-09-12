var http = require("http");
var server = http.createServer(function(req , res){

    res.writeHead(200, {"Content-Type": "text/html"});

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js</title>
        </head>
        <body>
            <h1>Node JS server</h1>
        </body
        </html>
    `);

});

server.listen(4000);
console.log("server is running on port 4000");  