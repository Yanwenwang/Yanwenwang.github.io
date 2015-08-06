(function () {

	angular
		.module('ywPortal')
		.controller('stopWatchController', stopWatchController);

		stopWatchController.$inject = ['stopWatchDataService'];

        function stopWatchController (stopWatchDataService) {
    		var vm = this;
    		
    		vm.data = stopWatchDataService.data;
    		vm.actions = stopWatchDataService.actions;
        }

}());
