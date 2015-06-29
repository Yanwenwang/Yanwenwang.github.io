(function () {
	
	angular
		.module('ywPortal')
		.controller('modalInstanceController', modalInstanceController);

	modalInstanceController.$inject = ['$modalInstance'];	

		function modalInstanceController ($modalInstance) {

			var vm = this;

			vm.ok =function () {
				$modalInstance.close('ok');
			};
		}

}());