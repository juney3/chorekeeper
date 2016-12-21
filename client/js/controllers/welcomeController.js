app.controller('welcomeController', ['$scope', 'usersFactory', '$location', '$cookies', function($scope, usersFactory, $location, $cookies){
	$scope.users = [];
	$scope.user = [];
	
	var index = function(){
		var user = {_id: $cookies.get('loggedUser')};
		usersFactory.find(user, function(data){
			console.log(data);
			$scope.user = data; 
		})
	}

	index(); 

	$scope.register = function(){
		usersFactory.create($scope.newUser, function(data){
			if(data.errors){
				console.log(data.errors); 
				$scope.errors = data.errors; 
			}
			else{
				console.log("in indexController ", data);
				$('#modal1').modal('close');
				$location.url('/welcome');
			}
		})
	}

}])


