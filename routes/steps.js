var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Steps = require('../models/steps');
var Process = require('../models/process');

router.get('/:id?', function (req, res, next) {
        //req.body.processId
        //console.log(req.params.id);

    Steps.find({process:req.params.id})
        .populate('user', 'firstName')
        .exec(function (err, data) {
           // console.log(data);
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: data
            });
        });
});

router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    })
});

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);


    User.findById(decoded.user._id, function (err, user) {

        if (err) {
            return res.status(500).json({
                title: 'User not match',
                error: err
            });
        }
        //find process to add step
        Process.findById(req.body.processId, function (err, process) {
                if (err) {
                    return res.status(500).json({
                        title: 'Process not match',
                        error: err
                    });
                }
        //////////////////////////////////////////
        var steps = new Steps({
            title: req.body.title,
            user: user,
            process: process
        });

        //Guardando el archivo
        steps.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'AError on Save',
                    error: err
                });
            }
            user.steps.push(result);
            user.save();
            process.steps.push(result)
            process.save();

            res.status(201).json({
                message: 'Saved Data',
                obj: result
            });
        });
        //////////////////////////
        });
    });
});

router.patch('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Steps.findById(req.params.id, function (err, steps) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!steps) {
            return res.status(500).json({
                title: 'No Data Found!',
                error: {message: 'Data not found'}
            });
        }
        if (steps.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        steps.title = req.body.title;
        steps.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated Data',
                obj: result
            });
        });
    });
});

router.delete('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Steps.findById(req.params.id, function (err, steps) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!steps) {
            return res.status(500).json({
                title: 'No Data Found!',
                error: {message: 'Data not found'}
            });
        }
        if (steps.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        steps.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });
});

module.exports = router;