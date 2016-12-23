// Require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChoreSchema = new mongoose.Schema({
		_household: {type: Schema.Types.ObjectId, ref: 'Household'}, 
		choreType: {type: String, required: true},
		_user: {type: Schema.Types.ObjectId, ref: 'User'}, 
		completed: {type: Date, required: true},
		description: {type: String},
		thumbs_up: {type: Number},
	}, { timestamps: true});

mongoose.model('Chore', ChoreSchema);
mongoose.Promise = global.Promise;