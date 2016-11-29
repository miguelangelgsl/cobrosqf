var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Moment = require('moment-timezone');
var Process = require('./process');
 var User = require('./user');

var schema = new Schema({ 
    title: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    process: {type: Schema.Types.ObjectId, ref: 'Process'},
    created_at: Date,
    updated_at: Date,
});

schema.post('remove', function (step) {

    Process.findById(step.process, function (err, process) {
        process.steps.pull(step);
        process.save();
    });

    User.findById(step.user, function (err, user) {
        user.steps.pull(step);
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


module.exports = mongoose.model('Steps', schema);