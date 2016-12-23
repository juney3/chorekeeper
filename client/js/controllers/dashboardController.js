app.controller('dashboardController', ['$scope', 'usersFactory', '$location', '$cookies', 'housesFactory', function($scope, usersFactory, $location, $cookies, housesFactory){
	$scope.users = []; 
	$scope.household = {};
	$scope.user = {};
	$scope.isAdmin = false;
	$scope.requests = [];
	$scope.chores = [];


	var index = function() {
		var user = {_id: $cookies.get('loggedUser')};
		usersFactory.find(user, function(data){
			// console.log('dashboardController has loggedUser', data.data);
			$scope.user = data.data;
		})
		housesFactory.retrieve(user, function(household){
			if (household){
			// console.log('dashboard controller has household', household);
			// console.log('dashboard controller has users', household._user);

			$scope.household = household;
			$scope.users = household._user;
			$scope.requests = household.requests;
				if(household._admin == $cookies.get('loggedUser')){
					$scope.isAdmin=true;
				}
			}
			else{
				console.log('user does not belong to a household')
				$location.url('/joinHouse');
			}
		})

		// find chores method
		// choresFactory.retrieve(user, function(chores){
		// 	if (chores){
		// 		$scope.chores = chores;
		// 	}
		// 	else {
		// 		console.log('no chores were retrieved');
		// 	}
		// })
	}

	index();



	$scope.approve = function(x){
		var user = {
			user: $scope.requests[x],
			household: $scope.household
		}; 
		housesFactory.approve(user, function(data){
			console.log("approved");
			
		})
		index();
	}

	$scope.decline = function(x){
		var user = {
			user: $scope.requests[x],
			household: $scope.household
		};
		housesFactory.decline(user, function(data){
			console.log("declined");
		})
		index();
	}

	$scope.logout = function(){
		$cookies.remove('loggedUser');
		$location.url('/');
	}

}])


