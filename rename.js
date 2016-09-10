var fs =  require("fs");
// sync rename
fs.renameSync("./lib/city.md", "./lib/europe.md");

console.log("File Renamed");
// Async rename
fs.rename("./lib/europe.md", "./Europe.md" , function(err){
    if (err){
        console.log(err);
    }else{
        console.log("Moved successfully");
    }

});