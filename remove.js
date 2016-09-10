var fs =  require("fs");
try{
    fs.unlinkSync("./lib/Europe.md");
} catch(err){
    console.log(err);
}
