// Single view controller
app.controller('viewController', function($scope, $http) {
	// Listen for file-upload event from other controller
	$scope.$on('file-upload', function(event, headings, rows){
		$scope.renderHtml(headings, rows);
	});
	
	// Render CSV as HTML table and ouput
	$scope.renderHtml = function(headings, rows) {
		console.log(headings, rows);
	};
});