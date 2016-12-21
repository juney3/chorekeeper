// Require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChoreSchema = new mongoose.Schema({
		_choreType: {type: Schema.Types.String, ref: 'Household'},
		_user: {type: Schema.Types.ObjectId, ref: 'User'}, 
		completed: {type: Date, required: true},
		description: {type: String},
		thumbs_up: {type: Number},
	}, { timestamps: true});

mongoose.model('Chore', ChoreSchema);
mongoose.Promise = global.Promise;