// Require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new mongoose.Schema({
		name: {type: String, required: true, minlength: 4},
		chore: [{type: Schema.Types.ObjectId, ref: 'Chore'}]
	}, { timestamps: true});

mongoose.model('Category', CategorySchema);
mongoose.Promise = global.Promise;