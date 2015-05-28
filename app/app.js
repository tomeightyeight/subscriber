var app = angular.module('Subscriber', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {templateUrl: '/public/html/views/main.html'}).
	when('/view', {templateUrl: '/public/html/views/single.html', controller: 'viewController'}).
	when('/upload', {templateUrl: '/public/html/views/upload.html', controller: 'uploadController'});
});