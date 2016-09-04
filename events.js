var Nigga = require("./lib/Nigga")

var cesar = new Nigga("Jasourne Bourne");

cesar.on('speak' , function(said){

	console.log(`${this.name}: ${said} `);

});

cesar.emit('speak' , "Welcome to culiacan Mexico"); 




// var emitter =  new events.EventEmitter();

// emitter.on('defunct' , function(message, status) {

// 	console.log(`${status}: ${message}`);
// })

// emitter.emit('defunct' , "England The United Kingdom" , 500);