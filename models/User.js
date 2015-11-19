var 	mongoose = require('mongoose')
	,	Schema = mongoose.Schema;

var User = Schema({
		email: { type: String, required: true }
	,	username: { type: String, required: true }
	,	level: { type: Number, default: 1 }
	,	location: String
	,	member: { type: Boolean, required: true }
});

module.exports = mongoose.model('User', User);