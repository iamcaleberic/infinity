var fs =  require("fs");
// sync function with try block for error catching
try{
    fs.unlinkSync("./lib/Europe.md");
} catch(err){
    console.log(err);
}
// async
fs.unlink("./lib/city.md" , function(err){
    if(err){
        console.log(err);
    }else {
        console.log("Poof! Removed")
    }
})