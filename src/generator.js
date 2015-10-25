var jsonSchemaGenerator = require('json-schema-generator');
var jsonFilter = require('json-filter');
var _ = require('lodash');
var fs = require('./fs.js');

module.exports = (json, createFile) => {
    // var objPrepared = jsonFilter(json, config.schemaFilter);
    var obj = jsonSchemaGenerator(json);
    var type = _.get(json, 'type', null);
    var tite;
    switch (type) {
        case "track":
            title = _.get(json, 'name', null);
            break;
        case "page":
            title = _.get(json, 'event', null);
            break;
        case "screen":
            title = _.get(json, 'name', null);
            break;
        default:
            title = type;
    }
    var projectId = _.get(json, 'projectId', null);;
    if (createFile && type && title && projectId) {
        console.log('Create File started');
        fs.createFile('tracking-plan/project-id-'+ projectId  +'/' + type + '/',  title + '.json', obj);
    }

    return obj;
};

function prepareJsonSegment(json, schemaFilter) {
    console.log(json.name);
    var name = _.get(json, 'name', null);
    var properties = _.get(json, 'properties', null);
}
