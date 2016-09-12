var http = require("http");
var fs   = require("fs");

var options = {
    hostname: "http://localhost:3000",
    port:3000,
    path:"/",
    method: "GET"
}

var req = http.request(options , function(res){
    var responseBody = "";
    console.log("Response from server started");
    console.log(`Server Status: ${res.statusCode}`);
    console.log("Response Headers: %j", res.headers);

    res.set("UTF-8");

    res.once("data", function(chunk){
        console.log(chunk)
    });

    res.on("data" , function(chunk){
        console.log(`--chunk--${chunk.length}`);
        responseBody += chunk;
    })
});