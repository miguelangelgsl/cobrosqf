var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://teamworkmongo:GlVKriTpOauqSSWLuZ1VrHKo5ghnLhE1W5TZXkD2e4ZvhQeS2oBaG9NQZY4v8jN5JRKqeRsEIzDw1aPBJedQgA==@teamworkmongo.documents.azure.com:10250/?ssl=true&sslverifycertificate=false');

module.exports = {mongoose};



