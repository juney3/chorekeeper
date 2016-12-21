// Require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HackSchema = new mongoose.Schema({
		title: {type: String},
		text: {type:String}
	}, { timestamps: true});

mongoose.model('Hack', HackSchema);
mongoose.Promise = global.Promise;