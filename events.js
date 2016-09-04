var Nigga = require("./lib/Nigga");

var jason  = new Nigga("Jasourne Bourne");
var avicii = new Nigga("DJ avicii");


avicii.on('speak' , function(said) {

	console.log(`${this.name} -> ${said}`);

})

jason.on('speak' , function(said){

	console.log(`${this.name}: ${said} `);

});

jason.emit('speak' , "Welcome to culiacan Mexico"); 
avicii.emit('speak' , "Electronic music"); 



// var emitter =  new events.EventEmitter();

// emitter.on('defunct' , function(message, status) {

// 	console.log(`${status}: ${message}`);
// })

// emitter.emit('defunct' , "England The United Kingdom" , 500);