app.controller('confirmController', ['$scope', 'hacksFactory', '$location', '$cookies', function($scope, hacksFactory, $location, $cookies){


	// define $scope variables
	$scope.hacks = [];
	$scope.errors = {};

	// define controller methods
	var index = function(){
		hacksFactory.find(function(data){
			$scope.hacks = data.data;
			console.log($scope.hacks);
		})
	}

	index();

}])