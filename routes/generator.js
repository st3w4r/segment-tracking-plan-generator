var express = require('express');
var generator = require('../src/generator.js');
var _ = require('lodash');

var router = express.Router();

router.post('/generator', (req, res, next) => {
    var option = _.get(req.query, 'file', null);
    var createFile;
    var updateFile;
// = _.get(req.query, 'file', null) === null ? false : true;
    switch (option) {
        case "update":
            updateFile = true;
            createFile = false;
            break;
        case "first":
            updateFile = false;
            createFile = true;
            break;
        default:
            updateFile = false;
            createFile = false;
    }
    var obj = generator(req.body, createFile, updateFile);
    res.status(200).send(obj);
});

router.get('/generator', (req, res, next) => {
    console.log(req);
    res.status(200).send({message: 'Send POST method with data in body application/json'});
})

module.exports = router;
