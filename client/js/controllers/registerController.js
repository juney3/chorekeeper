app.controller('registerController', ['$scope', 'usersFactory', '$location', function($scope, usersFactory, $location){
	$scope.users = []; 
	$scope.errors = []; 
	$scope.confirmError = [];

	$scope.register = function(){
		usersFactory.create($scope.newUser, function(data){
			if(data.errors){
				console.log(data.errors); 
				$scope.errors = data.errors; 
			}
			else{
				console.log("in indexController ", data);
				$('#modal1').modal('close');
				$location.url('/dashboard');
			}
		})
	}

}])


