var spawn =  require("child_process").spawn;

var cp = spawn("node" , ["parle"]); 

// pipe stdout process to function
cp.stdout.on("data" , function(data) {

	console.log(`STDOUT: ${data.toString()}`);
});

cp.on("close" , function() {

	console.log("Process has ended");

	process.exit();
});


// send stdin to be received by exit process
setTimeout(function() {
	cp.stdin.write("stop");
}, 4000);