var jsonSchemaGenerator = require('json-schema-generator');
var jsonFilter = require('json-filter');
var jsonValid = require('is-my-json-valid');
var _ = require('lodash');
var fs = require('fs');

module.exports = (json, callback) => {
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
        var fileName = 'tracking-plan/project-id-'+ projectId  +'/' + type + '/' + title + '.json';
        console.log(fileName);

        // var jsonFile = fs.readFile(fileName);
        fs.readFile(fileName, (err, data) => {
            var res = {};
            if (err) {
                res['validate'] = false;
                res['message'] = 'Json Schema Not found: ' + title;
                res['code'] = 404;
                return callback(res);
            };
            var jsonFileSchema = JSON.parse(data);
            var validate = jsonValid(jsonFileSchema);

            res['validate'] = validate(json,{greedy: true});
            res['message'] = validate.error;

            if (res['validate'] === true)
                res['code'] = 200;
            else
                res['code'] = 400;
            return callback(res);
        });
    }
};
