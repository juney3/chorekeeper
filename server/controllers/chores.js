var mongoose = require('mongoose');
var Chore = mongoose.model('Chore');
var Household = mongoose.model('Household');
var User = mongoose.model('User');

function ChoresController(){
	this.create = function(req,res){

		//define new chore
		var newChore = new Chore ({
			choreType: req.body.choreType,
			_user: req.body._user,
			completed: req.body.completed,
			description: req.body.completed,
			_household: req.body._household
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
		var chore = req.body.choreType;

		// save to user document
		User.update({_id: req.body._user}, {'$push': {chore: newChore._id}}, function(err, user){
			if(err){
				console.log(err);
			}
			else{
				console.log('added chore to user');
			}
		})

		// save to household document
		Household.update({_id: req.body._household}, {'$push': {choreType: chore}}, function(err, household){
			if(err){
				console.log(err);
			}
			else{
				console.log('added choreType to household');
			}
		})

		Household.update({_id: req.body._household}, {'$push': {completedChore: newChore._id}}, function(err, household){
			if(err){
				console.log(err);
			}
			else{
				console.log('added completedChore to household');
				res.json(household);
			}
		})

	}

	this.createNewType = function(req,res){
		var newChore = new Chore ({
			_household: req.body._household,
			choreType: req.body.choreType,
			_user: req.body._user,
			completed: req.body.completed,
			description: req.body.description
		})
		newChore.save(function(err, result){
			if(err){
				res.json(err);
			}
			else{
				console.log('successfully saved chore');
				res.json(result);
			}
		})
		console.log("new saved chore is ",newChore);
		Household.update({_id: newChore._household}, {'$push': {choreType: newChore.choreType}}, function(err, data){
			if(err){
				console.log("error");
			}
			else{
				console.log("successfuly appended new chore type to household");
			}
		})

	}

	// Find chores method
	this.retrieve = function(req, res){
		Chore.find({_household: req.body.household})
		.populate('_user')
		.populate('_household')
		.exec(function (err, chores){
			if(err){
				console.log('server side chore controller retrieve error', err);
			}
			else {
				res.json(chores);
			}
		})
	}
}
module.exports = new ChoresController(); 