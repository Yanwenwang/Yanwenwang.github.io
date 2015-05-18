( function () {

	angular
		.module('ywPortal')
		.controller('projectsController', projectsController);

	function projectsController () {

		var vm = this;
		vm.greeting = 'Hello projects!';
	}

}());