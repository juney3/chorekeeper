app.factory('choresFactory', ['$http', function($http) {
	// constructor for choresFactory
	var chores = [];
	var chore = {};
	var user = {};

	function ChoresFactory(){
		var _this = this;

		this.create = function(newChore, callback){
			console.log('choresFactory has', newChore);
			$http.post('/chore', newChore).then(function(data){
				if (typeof(callback) == 'function'){
					console.log('choresFactory returns chore', data);
					callback(data.data);
				}
			})
		};

		this.createNewType = function(newChore,callback){
			console.log(newChore);
			$http.post('/chore/newtype', newChore).then(function(data){
				if (typeof(callback) == 'function'){
					callback(data.data);
				}
			})
		}

		// Find chores method
		this.retrieve = function(user, callback){
			$http.post('/chore/retrieve', user).then(function(all){
				if (typeof(callback) == 'function'){
					console.log('choresFactory has all the chores', all);
					callback(all.data);
				}
			})

		}

	}
	return new ChoresFactory();
}])