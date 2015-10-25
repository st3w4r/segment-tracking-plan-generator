var jsonSchemaGenerator = require('json-schema-generator');
var jsonFilter = require('json-filter');
var _ = require('lodash');
var fs = require('./fs.js');
var fileSystem = require('fs');

module.exports = (json, createFile, updateFile) => {
    // var objPrepared = jsonFilter(json, config.schemaFilter);
    var obj = jsonSchemaGenerator(json);
    var type = _.get(json, 'type', null);
    var title;
    switch (type) {
        case "track":
            title = _.get(json, 'event', null);
            break;
        case "page":
            title = _.get(json, 'name', null);
            break;
        case "screen":
            title = _.get(json, 'name', null);
            break;
        default:
            title = type;
    }

    var projectId = _.get(json, 'projectId', null);;
    if (type && title && projectId) {
        var pathName = 'tracking-plan/project-id-'+ projectId  +'/' + type + '/';
        var fileName = title + '.json';

        if (updateFile) {
            console.log('Update File started');
            fs.createFile(pathName, fileName, obj);
        } else if (createFile) {
            fileSystem.stat(pathName + fileName, (err, stat) => {
                if (err) {
                    console.log('Create File started');
                    fs.createFile(pathName, fileName, obj);
                }
            });
        }
    }

    return obj;
};

function prepareJsonSegment(json, schemaFilter) {
    console.log(json.name);
    var name = _.get(json, 'name', null);
    var properties = _.get(json, 'properties', null);
}
