var app = angular.module('app', ['ngRoute', 'ui.materialize']);


app.config(function ($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'partials/index.html',
			controller: 'indexController'
		})
		.when('/register', {
			templateUrl: 'partials/register.html', 
			controller: 'registerController'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html', 
			controller: 'dashboardController'
		})
		.otherwise({
			redirectTo: '/'
		})
});