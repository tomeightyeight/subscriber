// Upload CSV controller
app.controller('uploadController', function($scope, $http) {
	$scope.headings = [];
	$scope.records = [];
	
	$scope.validFileType = function(fileName) {
		var valid = ['csv', 'CSV'];
		var ext = fileName.split('.').pop();
		
		return (valid.indexOf(ext) !== false) ? true : false;
	};
	
	// Parse file and convert to HTML for ouput
	$scope.parseFile = function(files) {
		var reader = new FileReader();
		
		// Take the first selected file
		$scope.file = files[0];
		
		// Get filename
		$scope.fileName = files[0].name;
		
		// Check valid file type
		if(!$scope.validFileType($scope.fileName)) {
			console.log('Invalid file type');
			return false;
		}
		
		// Using closures and anonymous self invoking functions 
		// so that we can use scope with the File Reader API
		reader.onloadend = (function($scope) {
			return function(file) {				
				var content = file.target.result;
				
				// Split rows at new line
				var rows = content.split(/\n/);
				
				// Extract headings (split columns at comma)
				$scope.headings.push(rows[0].split(/,/));
				rows.shift();
				
				// Extract records (split columns at comma)
				rows.forEach(function(item) {
					$scope.records.push(item.split(/,/));
				});
				
				// Emit file-upload event on completion of parsing	
				$scope.$broadcast('file-upload', {
					headings: $scope.headings,
					records: $scope.records
				});
				
				console.log($scope.headings);
			}
		})($scope);
			
		reader.readAsText($scope.file);
	};
});