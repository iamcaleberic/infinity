var fs =  require("fs");
try{
    fs.renameSync("./assets/logs", "./logs");
    console.log("Directory moved");
} catch(err){
    console.log(err);
};


fs.rmdir("assets",function(err){
    if (err){
        throw err;
    }

    console.log("Directory Removed");
});

fs.rmdir("./logs", function(err){
    if (err){
        throw err;
    }
    console.log("Poof! Gone");
})