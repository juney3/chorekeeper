app.controller('dashboardController', ['$scope', 'usersFactory', '$location', '$cookies', 'housesFactory', function($scope, usersFactory, $location, $cookies, housesFactory){
	$scope.users = []; 
	$scope.household = {};
	$scope.user = {};


	var index = function() {
		var user = {_id: $cookies.get('loggedUser')};
		usersFactory.find(user, function(data){
			console.log('dashboardController has loggedUser', data.data);
			$scope.user = data.data;
		})
		housesFactory.retrieve(user, function(household){
			console.log('dashboard controller has household', household);
			console.log('dashboard controller has users', household._user);
			$scope.household = household;
			$scope.users = household._user;
		})
	}
	 index();

	

}])


