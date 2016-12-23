app.controller('newChoreController', ['$scope', 'choresFactory', 'housesFactory', 'usersFactory', '$location', '$cookies', function($scope, choresFactory, housesFactory, usersFactory, $location, $cookies) {
	$scope.user = {};
	$scope.errors = [];
	$scope.household = {};
	$scope.chores = [];


	var index = function() {
		housesFactory.retrieveChores(function(data){
			$scope.chores = data;
		})
		console.log($scope.chores);
		var user = {_id: $cookies.get('loggedUser')};
		
		housesFactory.retrieve(user, function(household){
			if (household){
				$scope.household = household;
				$scope.chores = household.choreType; 
			}
		})
		usersFactory.find(user, function(data){
			// console.log('dashboardController has loggedUser', data.data);
			$scope.user = data.data;
		})
	}

	index();


	$scope.create = function(){
		var newChore = {
			choreType: $scope.newChore.name,
			_user: $scope.user._id,
			completed: $scope.newChore.completed,
			description: $scope.newChore.description,
			_household: $scope.household._id,
		}
		
		console.log(newChore);
		choresFactory.create(newChore, function(chore){
			if(chore.errors){
				console.log(chore.errors);
				$scope.errors = chore.errors;
			}
			else{
				console.log('in newChoreController', chore);
				$location.url('/dashboard');
			}
		})
	}
}])