module.exports = function(router)
{
	//Importing user model
	var User  = require('../models/user');

	//Define the route as /user, when called it must be like xxx:xxx/api/user
	router.route('/user')

		// get all the users (accessed at GET http://localhost:8080/api/bears)
		.get(function(req, res) {
			User.find(function(err, users) {
				if (err)
					res.send(err);

				res.json(users);
			});
		})

		// Here we can create a user (accessed at POST http://localhost:8080/api/user)
		.post(function(req, res) {
		
			var user = new User();	
			user.name = req.body.name;
			user.description = req.body.description;
			user.city = req.body.city;
			user.city = req.body.ridesgiven;
			user.city = req.body.ridestaken;
			user.signDate = req.body.ridestaken;

			//Every mongoose Schema has a save method						
			user.save(function(err) {
				if (err)
					res.send(err);

				//res means response, so the API will send a response with a message;
				res.json({ message: 'User created!' });
			});			
		})

		//this route needs an userId to be send with the url, but this is a simple example.
		//In "real-world", I would use a post, with a different end-point, and grab the id
		//from the request json
		router.route('/user/:userId')

		.get(function(req, res)
		{
 			User.findById(req.params.userId, function(err, user) {
				if (err)
					res.send(err);

				res.json(user);
			});		
		})

		.put(function(req, res) {
			User.findById(req.params.userId, function(err, user) {

				if (err)
					res.send(err);
				//The user retrieved from the database is "updated"
				user.name = req.body.name;
				user.description = req.body.description;
				user.city = req.body.city;
				user.city = req.body.ridesgiven;
				user.city = req.body.ridestaken;
				user.signDate = req.body.ridestaken;

				user.save(function(err) {
					if (err)
						res.send(err);

					res.json({ message: 'User updated!' });
				});

			});
		})

		// delete the bear with this id
		.delete(function(req, res) {
			User.remove({
				_id: req.params.userId
			}, function(err, user) {
				if (err)
					res.send(err);

				res.json({ message: 'User successfully deleted' });
			});
		});

}