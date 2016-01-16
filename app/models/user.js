//All models will require theese dependencies
//Mongoose will handle the database stuff
//Schema is a type of "object" that will store the Model properties
//More in: http://mongoosejs.com/docs/guide.html

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//Creates a "UserSchema" that will be exported at the end of the file.
var UserSchema   = new Schema({
	name: String,
	description: { type: String, default: "Hi, I am using Caronasil"},
	city: String,
	ridesgiven: { type:Number, default: 0},
	ridestaken: { type:Number, default: 0},
	signDate: { type: Date, default: Date.now }
});

//Exports the model as User
module.exports = mongoose.model('User', UserSchema);