var events = require('events');

var emitter =  new events.EventEmitter();

emitter.on('defunct' , function(message, status) {

	console.log(`${status}: ${message}`);
})

emitter.emit('defunct' , "England The United Kingdom" , 500);