var mongoose = require('mongoose');
var Moment = require('moment-timezone');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    admin:Boolean,
    meta: {
        age: Number,
        website: String
    },
    created_at: Date,
    updated_at: Date,
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    processes: [{type: Schema.Types.ObjectId, ref: 'Process'}],
    steps: [{type: Schema.Types.ObjectId, ref: 'Steps'}]
});

schema.plugin(mongooseUniqueValidator);

// on every save, add the date
schema.pre('save', function(next) {
  // get the current date
  var currentDate =  Moment().tz('America/El_Salvador').format();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});


module.exports = mongoose.model('User', schema);