// Require mongoose
var mongoose = require('mongoose');

var HackSchema = new mongoose.Schema({
		text: String,
	}, { timestamps: true});

mongoose.model('Hack', HackSchema);
mongoose.Promise = global.Promise;