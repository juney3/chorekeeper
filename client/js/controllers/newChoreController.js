app.controller('newChoreController', ['$scope', 'choresFactory', 'housesFactory', 'usersFactory', '$location', '$cookies', function($scope, choresFactory, housesFactory, usersFactory, $location, $cookies) {
	$scope.user = {};
	$scope.errors = [];
	$scope.household = {};

	console.log('newChoreController loaded');

	var index = function(){
		var user = {_id: $cookies.get('loggedUser')};
		usersFactory.find(user, function(data){
			$scope.user = data.data; 
			console.log($scope.user);
		})

		housesFactory.retrieve(user, function(household){
			$scope.household = household;
			console.log('chore controller says household is', $scope.household.name);
		})
		
	}

	index(); 

	$scope.create = function(){
		var newChore = {
			_choreType: $scope.newChore.name,
			_user: $scope.user._id,
			completed: $scope.newChore.completed,
			description: $scope.newChore.description,
			household: $scope.household._id,
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