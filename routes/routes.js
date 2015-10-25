(() => {
    var generator = require('./generator.js');
    var validator = require('./validator.js');

    module.exports = (app) => {
        app.use(generator);
        app.use(validator);
    };
}());
