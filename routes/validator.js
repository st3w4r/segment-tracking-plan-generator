var express = require('express');
var validator = require('../src/validator.js');
var _ = require('lodash');

var router = express.Router();

router.post('/validator', (req, res, next) => {
    validator(req.body, (result) => {
        if (result.validate === true)
            res.status(result.code).send({validate: result.validate});
        else
            res.status(result.code).send({validate: result.validate, message: result.message});
    });
});

router.get('/validator', (req, res, next) => {
    console.log(req);
    res.status(200).send({message: 'Send POST method with data in body application/json'});
})

module.exports = router;
