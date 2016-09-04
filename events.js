var events = require('events');

var emitter =  new events.EventEmitter();

emitter.on('defunct' , function(message, status) {

	console.log(`${status}: ${message}`);
})