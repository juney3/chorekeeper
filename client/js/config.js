var app = angular.module('app', ['ngRoute', 'ui.materialize', 'ngCookies']);


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
		.when('/welcome',{
			templateUrl: 'partials/welcome.html', 
			controller: 'welcomeController'
		})
		.when('/createHouse', {
			templateUrl: 'partials/createHouse.html', 
			controller: 'createHouseController'
		.when('/#modal2', {
			templateUrl: 'partials/login.html',
			controller: 'loginController'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html', 
			controller: 'dashboardController'
		})
		.otherwise({
			redirectTo: '/'
		})
});