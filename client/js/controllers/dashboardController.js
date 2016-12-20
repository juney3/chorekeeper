app.controller('dashboardController', ['$scope', 'usersFactory', '$location', function($scope, usersFactory, $location){
	$scope.users = []; 
	usersFactory.index(function(data){
		$scope.users = data; 
	})

	

}])


