var spawn =  require("child_process").spawn;

var cp = spawn("node" , ["parle"]); 

cp.stdout.on("data" , function(data) {

	console.log(`STDOUT: ${data.toString()}`);
});

cp.on("close" , function() {

	console.log("Process has ended");

	process.exit();
});

setTimeout(function() {
	cp.stdin.write("stop");
}, 4000);