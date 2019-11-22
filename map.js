(function(ext) {
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};

	ext. ukMapX = function() {
		return 2
	};

	ext. ukMapY = function() {
		return 2
	};

	var descriptor = {
		blocks: [
			['r', 'ukMapX', 'ukMapX'],
			['r', 'ukMapY', 'ukMapY']
		],
		displayName: 'map'
	}

	ScratchExtensions.register('map', descriptor, ext);

})({});
