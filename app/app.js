var app = angular.module('Subscriber', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {templateUrl: '/public/html/views/main.html'}).
	when('/view', {templateUrl: '/public/html/views/list.html', controller: 'uploadController'}).
	when('/upload', {templateUrl: '/public/html/views/upload.html', controller: 'uploadController'});
});