// Require mongoose
var mongoose = require('mongoose');

var ChoreSchema = new mongoose.Schema({
		_category: {type: Schema.Types.ObjectId, ref 'Category'},
		_user: {type: Schema.Types.ObjectId, ref 'User'}, 
		completed: {type: Date, required: true},
		description: String,
		thumbs_up: Number,
	}, { timestamps: true});

mongoose.model('Chore', ChoreSchema);
mongoose.Promise = global.Promise;