app.factory('choresFactory', ['$http', function($http) {
	// constructor for choresFactory
	var chores = [];
	var chore = {};
	var user = {};

	console.log('choresFactory loaded');

	function ChoresFactory(){
		var _this = this;

		this.create = function(newChore){
			console.log('choresFactory has', newChore);
		};

	}
	return new ChoresFactory();
}])