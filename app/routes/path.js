module.exports = function(router)
{
	//Importing user model
	var Path  = require('../models/path');

	//Define the route as /user, when called it must be like xxx:xxx/api/user
	router.route('/path')

		// get all the users (accessed at GET http://localhost:8080/api/bears)
		//This part can be changed to POST soon
		.get(function(req, res) {
			Path.find(function(err, users) {
				if (err)
					res.send(err);

				res.json(users);
			});
		})

		// Here we can create a user (accessed at POST http://localhost:8080/api/user)
		.post(function(req, res) {
		
			var path = new Path();	
			path.offeredBy = req.body.offeredBy;
			path.description = req.body.description;
			path.startPoint = req.body.startPoint;
			path.endPoint = req.body.endPoint;
			path.rideDate = req.body.rideDate;
			path.maxRiders = req.body.maxRiders;
			path.checkPoints = req.body.checkPoints;

			//Every mongoose Schema has a save method						
			path.save(function(err) {
				if (err)
					res.send(err);

				//res means response, so the API will send a response with a message;
				res.json({ message: 'Path created!' });
			});			
		});

	router.route('/path/:pathId')

		.get(function(req, res) {
			Path.findById(req.params.pathId, function(err, path) {
				if (err)
					res.send(err);

				res.json(path);
			});
		})

		.put(function(req, res) {
			Path.findById(req.params.pathId, function(err, path) {

				if (err)
					res.send(err);

				path.offeredBy = req.body.offeredBy;
				path.description = req.body.description;
				path.startPoint = req.body.startPoint;
				path.endPoint = req.body.endPoint;
				path.rideDate = req.body.rideDate;
				path.maxRiders = req.body.maxRiders;
				path.checkPoints = req.body.checkPoints;

				
				path.save(function(err) {
					if (err)
						res.send(err);

					res.json({ message: 'Path updated!' });
				});

			});
		})
		
		// delete the bear with this id
		.delete(function(req, res) {
			Path.remove({
				_id: req.params.pathId
			}, function(err, path) {
				if (err)
					res.send(err);

				res.json({ message: 'Successfully deleted' });
			});
		});

}