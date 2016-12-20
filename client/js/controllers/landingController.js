app.controller('landingController', ['$scope', 'usersFactory', '$location', function($scope, usersFactory, $location){
	$scope.users = []; 
	// usersFactory.index(function(data){
	// 	$scope.users = data; 
	// })

	$scope.register = function(){
		console.log("submitted ", $scope.newUser);
		usersFactory.create($scope.newUser, function(data){
			if(data.errors){
				console.log(data.errors); 
			}
			else{
				console.log("in controller ", data);
				$location.url('/dashboard');
			}
		})
	}

}])


