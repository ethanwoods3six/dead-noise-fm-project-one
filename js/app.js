angular.module('sampleApp', ['ngRoute']);

angular.module('sampleApp') .config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html'
	})
	.when('/play', {
		templateUrl: 'templates/play.html'
	})
	.when('/buy', {
		templateUrl: 'templates/buy.html'
	})
	.when('/subscribe', {
		templateUrl: 'templates/subscribe.html'
	});
});
