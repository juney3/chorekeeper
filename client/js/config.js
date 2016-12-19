var app = angular.module('app', ['ngRoute']);
{app.config(function ($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'partials/index.html',
			controller: 'indexController'
		})
		.when('/register', {
			templateUrl: 'partials/register.html', 
			controller: 'registerController'
		})
		.otherwise({
			redirectTo: '/'
		})
});}