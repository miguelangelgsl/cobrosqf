var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Moment = require('moment-timezone');
var User = require('./user');

var schema = new Schema({
    title: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    created_at: Date,
    updated_at: Date,
    steps: [{type: Schema.Types.ObjectId, ref: 'Steps'}]
});

schema.post('remove', function (process) {
    User.findById(process.user, function (err, user) {
        user.processes.pull(process);
        user.save();
    });
});
 

schema.pre('save', function(next) {
  var currentDate =  Moment().tz('America/El_Salvador').format();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});



module.exports = mongoose.model('Process', schema);