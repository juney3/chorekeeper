app.controller('newChoreController', ['$scope', 'choresFactory', 'housesFactory', 'usersFactory', '$timeout', '$cookies', function($scope, choresFactory, housesFactory, usersFactory, $timeout, $cookies) {
	$scope.user = [];
	$scope.household = {};
	$scope.chores = ["dishes"];
	// $timeout(function(){
	// 	$scope.$apply(function(){
	// 		$scope.chores[0].lateLoader = 'i just loaded';
	// 	})
	// }, 1000);

	var index = function() {
		housesFactory.retrieveChores(function(data){
			$scope.chores = data;
		})
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
		console.log('newChoreControllerhas', $scope.newChore);
		// choresFactory.create($scope.newChore) {

		// }
	}
}])