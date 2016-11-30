var mongoose = require('mongoose');
var configApp = require('./configApp');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || `mongodb://${configApp.serverDB}:${configApp.portDB}/${configApp.db}`);

module.exports = {mongoose};



 