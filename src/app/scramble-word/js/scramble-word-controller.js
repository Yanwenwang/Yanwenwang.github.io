(function () {

	angular
		.module('ywPortal')
		.controller('scrambleWordController', scrambleWordController);

        function scrambleWordController () {
    		var vm = this;
            vm.greeting = 'hello scramble word';
        }

}());
