(function () {

    angular
        .module('ywPortal')
        .controller('modalInfoController', modalInfoController);

    modalInfoController.$inject = ['$modalInstance', 'data'];

    function modalInfoController($modalInstance, data) {

        var vm = this;

        vm.ok = function () {
            $modalInstance.close('ok');
        };

        vm.data = data;
    }

}());
