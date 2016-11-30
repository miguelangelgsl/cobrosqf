var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('./setup/mongoose');



/* Rotas de los diferentes conponentes */
var appRoutes = require('./routes/app');
var messageRoutes = require('./routes/messages');
var userRoutes = require('./routes/user');
var processRoutes = require('./routes/process');
var stepsRoutes = require('./routes/steps');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});


app.use('/message', messageRoutes);
app.use('/user', userRoutes);
app.use('/process', processRoutes);
app.use('/stepss', stepsRoutes);
app.use('/', appRoutes);


// Los errores 404 los maneja el FrontEnd
app.use(function (req, res, next) {
    res.render('index.hbs', {
        options: configApp
    }); 

});


module.exports = app;
