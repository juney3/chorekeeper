app.controller('loginController', ['$scope', 'usersFactory', '$location', '$cookies', function($scope, usersFactory, $location, $cookies){


	// define $scope variables
	$scope.user = [];
	$scope.errors = {};

	// define controller methods
	$scope.login = function() {
		usersFactory.login($scope.returnUser, function(data){
			if(data.errors){
				console.log('login errors', data.errors);
				$scope.errors = data;
				console.log('this is $scope.errors', $scope.errors);
			}

			else{
				console.log('loginController data', data);
				$cookies.put('loggedUser', data._id);
				$('#modal2').modal('close');
				$location.url('/dashboard');
			}
		})
	}
}])