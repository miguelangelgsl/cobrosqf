var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Moment = require('moment-timezone');
var User = require('./user');

var schema = new Schema({
    title: {type: String, required: true},
    created_at: Date,
    updated_at: Date,
    caso: Number,
    proceso: Number,
    estado: String,
    fecha_creacion: Date,
    fecha_area: Date,
    accion: Number,
    estado_entidad: Number,
    duracion: Date,
    unidad: String,
    servicio: String,
    usuario: String,
    tema:String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
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

//CASO	PROCESO	ESTADO	FECHA_CREACION	FECHA_AREA	ACCION	ESTADO_ENTIDAD	DURACION	UNIDAD	SERVICIO	USUARIO	TEMA
