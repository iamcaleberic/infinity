// require core modules 
var path =  require('path'); 
var util = require('util'); 

// pluck base file
util.log(path.basename(__filename));

var dirUploads = path.join(__dirname , 'www' , 'files' , 'uploads');

util.log(dirUploads); // util module similar to console.log but adds time to output