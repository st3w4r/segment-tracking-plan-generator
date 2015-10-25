var express = require('express');
var generator = require('../src/generator.js');
var _ = require('lodash');

var router = express.Router();

router.post('/generator', (req, res, next) => {
    // console.log(req);
    var createFile = _.get(req.query, 'file', null) === null ? false : true;
    // console.log(createFile);
    var obj = generator(req.body, createFile);
    // console.log(req.query);
    // console.log(req.query.file);
    res.status(200).send(obj);
});

router.get('/generator', (req, res, next) => {
    console.log(req);
    res.status(200).send(req.body);
})

module.exports = router;
