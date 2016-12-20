// Require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
		firstName: {
			type: String, 
			required: [true, "Please provide your first name"], 
			minlength: 2
		},
		lastName: {
			type: String, 
			required: [true, "Please provide your last name"],  
			minlength: 2
		}, 
		password: {
			type: String, 
			required: [true, "Please create a password"], 
			minlength: [8, "Password must be at least 8 characters long"], 
			validate: {
				validator: function(value){
					return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
				},
				message: "Password must have at least 1 number, uppercase, and special character"
			}
		},
		email: {
			type: String, 
			required: [true, "Please provide your email address"],
			unique: true,
			validate: {
				validator: function(value){
					return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value );
				},
				message: "Please provide a valid email address"
			}
			
		},
		household: {type: Schema.Types.ObjectId, ref: 'Household'},
		chore: [{type: Schema.Types.ObjectId, ref: 'Chore'}]
	}, { timestamps: true});

UserSchema.methods.addBcrypt = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

UserSchema.pre('save', function(done){
	this.password = this.addBcrypt(this.password);
	done();
})


mongoose.model('User', UserSchema);
mongoose.Promise = global.Promise;