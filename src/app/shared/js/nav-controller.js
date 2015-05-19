(function () {

	angular
		.module('ywPortal')
		.controller('navController', navController);

	function navController ($location) {

		var vm = this;

		vm.getClass = function(path) {
			console.log($location.path());
		    if ($location.path() === path) {
		      	return 'active';
		    } 

		    return ''; 
		}
	}

}());
