app.controller('registerController', ['$scope', 'usersFactory', '$location', function($scope, usersFactory, $location){
	$scope.users = []; 
	$scope.errors = []; 

	$scope.register = function(){
		usersFactory.create($scope.newUser, function(data){
			console.log($scope.newUser);
			if(data.errors){
				console.log(data.errors); 
				$scope.errors = data.errors; 
			}
			else{
				console.log("in indexController ", data);
				$location.url('/dashboard');
			}
		})
		
		
	}

}])


