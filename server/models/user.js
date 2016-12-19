// Require mongoose
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
		first_name: {type: String, required: true, minlength: 2},
		last_name: {type: String, required: true, minlength: 2}, 
		username: {type: String, minlength: 2},
		password: {type: String, required: true, minlength: 8},
		email: {type: String, required: true},
		household: [{type: Schema.Types.ObjectId, ref: 'Household'}],
		chore: [{type: Schema.Types.ObjectId, ref: 'Chore'}]
	}, { timestamps: true});

mongoose.model('User', UserSchema);
mongoose.Promise = global.Promise;