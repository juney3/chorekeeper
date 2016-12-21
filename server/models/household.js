// Require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HouseholdSchema = new mongoose.Schema({
		name: {type: String},
		_user: [{type: Schema.Types.ObjectId, ref: 'User'}],
		_admin: {type: Schema.Types.ObjectId, ref: 'User'},
		choreType: [{type: String}]
	}, { timestamps: true});

mongoose.model('Household', HouseholdSchema);
mongoose.Promise = global.Promise;