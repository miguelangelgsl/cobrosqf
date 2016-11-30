var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/', function (req, res, next) { 
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
        admin: req.body.admin
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

router.get('/init', function (req, res, next) { 

 var user = new User({
        firstName: 'Admin',
        lastName: '-',
        password: bcrypt.hashSync(req.query.password, 10),
        email: req.query.mail,
        admin: true
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                flag: false,
                obj: err
            });
        }
        res.status(201).json({
                title: 'Se ha creado usuario Administrador',
                flag:true,
                obj: result.email
        });
    });





});

router.post('/signin', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'Falló inicio de sesión',
                error: {message: 'Debe proporcionar los datos completos'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Falló inicio de sesión',
                error: {message: 'Usuario o contraseña son incorrecta'}
            });
        }
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 36000});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id,
            admin:user.admin,
            email: user.email,
            name: user.firstName
        }); 
    });
});

router.get('/expired', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(201).json({
                title: 'Not Authenticated',
                flag: false
            });
        }else{
            return res.status(201).json({
                title: 'Authenticated',
                flag: true
            });
        }
    })
});

module.exports = router;
