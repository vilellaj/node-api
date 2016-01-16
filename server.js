// BASE SETUP
// =============================================================================

// import modules needed
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

//database connection
var mongoose = require('mongoose');
var dbconfig = require('./app/config/db');
mongoose.connect(dbconfig.options.uri); // connect to our database

var events = require('events');

var EventEmitter = new events.EventEmitter();


// create our router
var router = express.Router();

require('./app/routes')(router);

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

app.get('*', function(req, res) {
        res.sendfile('public/index.html');
        EventEmitter.emit('Startingapp'); // load the single view file (angular will handle the page changes on the front-end)
});

function onStartingapp()
{
	console.log('Index served');
}

EventEmitter.on('Startingapp', onStartingapp);

// START THE SERVER
// =============================================================================
app.listen(port);

console.log('Magic happens on port ' + port);
