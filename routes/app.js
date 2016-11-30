var express = require('express');
//const hbs = require('hbs');

var router = express.Router();

router.get('/', function (req, res) {
    res.render('index.hbs', {
         options: configApp
    }); 
});

module.exports = router;
