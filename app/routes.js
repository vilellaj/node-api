module.exports = function(router)
{
	//middleware for all routes
	router.use(function(req, res, next) {
		// do logging
		console.log('Something is happening.');
		next();
	});

	// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
	router.get('/', function(req, res) {
		res.json({ message: 'Welcome to the API :D!' });	
	});

	require('./routes/user')(router);
	require('./routes/path')(router);
	// on routes that end in /bears
	// ----------------------------------------------------
	
	// on routes that end in /bears/:bear_id
	// ----------------------------------------------------	
};