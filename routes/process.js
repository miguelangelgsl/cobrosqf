var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Process = require('../models/process');

router.get('/', function (req, res, next) {
    Process.find()
        .populate('user', 'firstName')
        .exec(function (err, data) {
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
            console.log(err);
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
                title: 'An error occurred',
                error: err
            });
        }
        var process = new Process({
            title: req.body.title,
            user: user
        });
        process.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            user.processes.push(result);
            user.save();
            res.status(201).json({
                message: 'Saved Data',
                obj: result
            });
        });
    });
});

router.patch('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Process.findById(req.params.id, function (err, process) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!process) {
            return res.status(500).json({
                title: 'No Data Found!',
                error: {message: 'Data not found'}
            });
        }
        if (process.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        process.title = req.body.title;
        process.save(function (err, result) {
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
    Process.findById(req.params.id, function (err, process) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!process) {
            return res.status(500).json({
                title: 'No Data Found!',
                error: {message: 'Data not found'}
            });
        }
        if (process.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        process.remove(function (err, result) {
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