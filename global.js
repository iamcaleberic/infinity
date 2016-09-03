var path = require("path")


global.console.log(`iamcaleberic ${path.basename(__filename)}`)

console.log(process.argv); // argument variables used to start process

// Get argv array flags
function grab(flag) {
	// body...
	var index =  process.argv.indexOf(flag);
	return (index === -1 ) ? null : process.argv[index+1] 
}

var greeting =  grab('--greeting');
var user = grab('--user');

if (!user || !greeting){
	console.log("You blew it");
} else {
	console.log(`welcome ${user} , ${greeting}`);
}

var replies = []

var questions = ["what is your name ?" , 
"what is your fav hobby?" , 
"what is your pref programming language? "];

function interview(i) {
	// body...
	process.stdout.write(`\n\n\n ${questions[i]}`);
	process.stdout.write("   > \n\n");
}

process.stdin.on('data', function(data){

	replies.push(data.toString().trim());

	if (replies.length < questions.length){
		interview(replies.length);
	} else {
		process.exit();
	}
})


process.on('exit' , function(){
	process.stdout.write("\n\n\n\n");

	process.stdout.write(`Yaay ${replies[1] } ${replies[0] } youll write ${replies[2]}`)

	process.stdout.write("\n\n\n\n");
})

interview(0)