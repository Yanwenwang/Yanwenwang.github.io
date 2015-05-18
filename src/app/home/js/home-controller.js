(function() {

	angular
		.module('ywPortal')
		.controller('homeController', homeController);

	function homeController() {
		var vm = this;
		vm.greeting = 'Hello home!';
	}

}());