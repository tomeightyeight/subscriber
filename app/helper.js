var Helper = {
	toObject: function(arr) {
		var rv = {};
		
		for (var i = 0; i < arr.length; ++i) {
			if (arr[i] !== undefined) rv[i] = arr[i];	
		}
		
		return rv;
	}
}