var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var server = http.createServer(app);

app.set('views', __dirname + 'public/views')
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

/**
 * Routes
 */

require('./routes/routes.js')(app);

/**
 * Server
 */
server.listen(port, ()=>{
    console.log('App listening on port ' + port);
});
