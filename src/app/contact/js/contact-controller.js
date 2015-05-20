(function(){

	angular
		.module('ywPortal')
		.controller('contactController', contactController);

	function contactController () {

		var vm = this;
		vm.greeting = 'Hello contact!';
	}

}());