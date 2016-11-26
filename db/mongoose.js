var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://root:mrjideas2016@ds111178.mlab.com:11178/teamwork');

module.exports = {mongoose};



