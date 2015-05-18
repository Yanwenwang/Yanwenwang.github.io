(function() {

	angular
		.module('ywPortal')
		.controller('aboutController', aboutController)

	function aboutController () {

		var vm = this;
		vm.greeting = 'Hello about!'
	}

}());