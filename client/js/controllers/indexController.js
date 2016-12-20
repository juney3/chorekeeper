app.controller('indexController', ['$scope', 'usersFactory', '$location', function($scope, usersFactory, $location){
	$scope.users = []; 
	// usersFactory.index(function(data){
	// 	$scope.users = data; 
	// })

	// $scope.index = function(){
	// 	console.log("loading");
	// 	$(document).ready(function(){
	// 	   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	// 	   $('.modal').modal();
	// 	});
		
	// };

	// $scope.index();

	$scope.register = function(){
		console.log("submitted");
		usersfactory.create($scope.newUser, function(data){
			if(data.errors){
				console.log(data.errors); 
			}
			else{
				console.log("in indexController ", data);
				$location.url('/dashboard');
			}
		})
	}

}])


