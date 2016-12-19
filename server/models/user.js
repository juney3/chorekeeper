var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
		name: String,
		phone: Number, 
		bday: Date 
	})

mongoose.model('User', UserSchema);
mongoose.Promise = global.Promise;