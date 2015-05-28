// Upload CSV controller
app.controller('uploadController', ['$scope', function($scope) {
	$scope.headings = [];
	$scope.records = [];
	
	$scope.validFileType = function(fileName) {
		var valid = ['csv', 'CSV'];
		var ext = fileName.split('.').pop();
		
		return (valid.indexOf(ext) !== false) ? true : false;
	};
	
	// Parse CSV file
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
		
		// Using closures and anonymous self invoking function
		// so that we can use scope with the File Reader API
		reader.onloadend = (function($scope) {
			return function(file) {				
				var content = file.target.result;
				
				// Split rows at new line
				var rows = content.split(/\n/);
				
				// Extract headings (split columns at comma)
				$scope.headings = Helper.toObject(rows[0].split(/,/));
				rows.shift();
				
				// Extract records (split columns at comma)
				rows.forEach(function(item, index) {					
					var split = item.split(/,/);
					
					var recordObj = {};
					split.forEach(function(item, index) {
						var propertyName = $scope.headings[index];
						recordObj[propertyName] = item;
					});
					
					$scope.records.push(recordObj);
				});
				
				console.log($scope.headings, $scope.records);
			}
		})($scope);
			
		reader.readAsText($scope.file);
	};
}]);