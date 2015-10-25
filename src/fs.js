var fs = require('fs');
var mkdirp = require('mkdirp');

exports.createFile = (path, fileName, json) => {
    // fs.stat(path, (err, stats) => {
        // if (err) {
    // Create Directory
    mkdirp(path, (err) => {
        if (err) throw err;
        console.log('Directory created ' + path);
        // Create File
        create(path + fileName, JSON.stringify(json, null, 4));
    });
        // }
    // });
};

function create(fileName, data) {
console.log(fileName);
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        return 'Saved' + fileName;
    });
}

exports.readFile = (fileName) => {
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        return data;
    });
}
