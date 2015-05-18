(function () {

	angular
		.module('ywPortal')
		.controller('resumeController', resumeController);

	function resumeController () {

		var vm = this;
		vm.greeting = 'Hello resume!';
	
	}

}());
