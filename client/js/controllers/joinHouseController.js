app.controller('joinHouseController', ['$scope', 'housesFactory', 'usersFactory', '$location', '$cookies', function($scope, housesFactory, usersFactory, $location, $cookies){
	$scope.user = [];
	$scope.households = [];

	var index = function(){
		housesFactory.find(function(data){
			$scope.households = data.data;
			// console.log("households ",$scope.households);
		})
		var user = {_id: $cookies.get('loggedUser')};
		usersFactory.find(user, function(data){
			$scope.user = data.data; 
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

	$scope.request = function(index){
		var requestData = {
			user: $scope.user,
			household: $scope.households[index]
		}
		housesFactory.request(requestData, function(data){
			// $location.url('/dashboard');
		})
	}

}])