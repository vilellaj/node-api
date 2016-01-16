//Model to hold the user path and its information
//Maybe will be used adress, instead of geolocation
//More in: https://developers.google.com/maps/documentation/javascript/examples/directions-complex

//All models will require theese dependencies
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PathSchema   = new Schema({
	offeredBy: { type: String },
	description: { type: String, default: "Let's take a ride, mate :D"},
	startPoint: {type: String, default: "empty"},
	endPoint: { type: String, default: "empty" },
	rideDate: { type: Date, default: Date.now },
	maxRiders: {type: Number, default: 1},
	checkPoints: [{
		place: String,
		lat: Number,
		lng: Number
	}]
});

module.exports = mongoose.model('Path', PathSchema);
