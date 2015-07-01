(function () {

	angular
		.module('ywPortal')
		.controller('modalInfoController', modalInfoController);

	modalInfoController.$inject = ['$modalInstance'];	

		function modalInfoController ($modalInstance) {

			var vm = this;

			vm.ok =function () {
				$modalInstance.close('ok');
			};
		}

}());
