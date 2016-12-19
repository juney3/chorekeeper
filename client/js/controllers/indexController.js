app.controller('indexController', ['$scope', 'usersFactory', function($scope, usersFactory){
	$scope.users = []; 
	usersFactory.index(function(data){
		$scope.users = data; 
	})

}])


