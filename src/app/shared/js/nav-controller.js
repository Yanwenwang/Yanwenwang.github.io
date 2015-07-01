(function () {

	angular
		.module('ywPortal')
		.controller('navController', navController);

	function navController ($location) {

		var vm = this;

		vm.getClass = function(path) {

		    if ($location.path() === path) {
		      	return 'active';
		    }

		    return '';
		};

		vm.collapsed = true;

	}

}());
