var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Nigga = function(name){
	this.name = name;
}  


util.inherits(Nigga , EventEmitter);

module.exports = Nigga