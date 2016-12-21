app.controller('registerController', ['$scope', 'usersFactory', '$location', '$cookies', function($scope, usersFactory, $location, $cookies){
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
				$cookies.put('loggedUser', data.data._id);
				$('#modal1').modal('close');
				$location.url('/welcome');
			}
		})
	}

}])


