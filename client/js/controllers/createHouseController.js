app.controller('createHouseController', ['$scope', 'housesFactory', 'usersFactory', '$location', '$cookies', function($scope, housesFactory, usersFactory, $location, $cookies){
	$scope.user = [];

	var index = function(){
		var user = {_id: $cookies.get('loggedUser')};
		usersFactory.find(user, function(data){
			$scope.user = data; 
		})
	}

	index(); 

	$scope.create = function(){
		var newHouse = {
			name: $scope.newHouse.name, 
			_user: $scope.user._id, 
			admin: $scope.user._id, 
			choreType: $scope.newHouse.choreType
		}
		console.log(newHouse);
		housesFactory.create(newHouse, function(data){
			$location.url('/dashboard');
		})
	}

}])


