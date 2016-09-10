var fs = require("fs");

fs.mkdir("libs" , function(err){
    if (err){
        console.log(err)
    }else{
        console.log("Directory created");
    }
});
