var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){

    if (req.method === "GET"){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream("./public/form.html" , "UTF-8").pipe(res);
    } else if(req.method === "POST"){

        var details = "";
        req.on("data", function(chunk){
            details += chunk;
    
        req.on("end", function(){
            res.writeHead(200 , {"Content-Type":"text/html"});
            res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Form Results</title>
                </head>
                <body>
                    <h1>Your form Results</h1>
                    <p>${details}</p>
                </body>
                </html>
            `)
        });

    });

    }
}).listen(5000);

console.log("Form server litsening on port 5000");