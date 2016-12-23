var mongoose = require('mongoose');
var Chore = mongoose.model('Chore');
var Household = mongoose.model('Household');
var User = mongoose.model('User');

function ChoresController(){
	this.create = function(req,res){

		//define new chore
		var newChore = new Chore ({
			_choreType: req.body._choreType,
			_user: req.body._user,
			completed: req.body.completed,
			description: req.body.completed
		})

		// save new chore
		newChore.save(function(err, result){
			if(err){
				res.json(err);
			}
			else{
				console.log('successfully saved chore');
			}
		})
		

		// set chore to variable for saving to other models
		var chore = req.body._choreType;

		// save to user document
		User.update({_id: req.body._user}, {'$push': {chore: chore}}, function(err, user){
			if(err){
				console.log(err);
			}
			else{
				console.log('added chore to user');
			}
		})

		// save to household document
		Household.update({_id: req.body.household}, {'$push': {choreType: chore}}, function(err, household){
			if(err){
				console.log(err);
			}
			else{
				console.log('added chore to household');
				res.json(household);
			}
		})

	}

	// Find chores method
	// this.retrieve = function(req, res){
	// 	Chore.find({})
	// }
}
module.exports = new ChoresController(); 