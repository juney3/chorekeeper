app.controller('newChoreController', ['$scope', 'choresFactory', 'housesFactory', 'usersFactory', '$location', '$cookies', function($scope, choresFactory, housesFactory, usersFactory, $location, $cookies) {
	$scope.user = [];

	console.log('newChoreController loaded');

	$scope.create = function(){
		console.log('newChoreControllerhas', $scope.newChore);
		choresFactory.create($scope.newChore) {

		}
	}
}])