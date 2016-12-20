// Require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HouseholdSchema = new mongoose.Schema({
		_user: {type: Schema.Types.ObjectId, ref: 'User'},
		admin: [{type: Schema.Types.ObjectId, ref: 'User'}],
	}, { timestamps: true});

mongoose.model('Household', HouseholdSchema);
mongoose.Promise = global.Promise;