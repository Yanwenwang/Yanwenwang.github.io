(function () {

    angular
        .module('ywPortal')
        .controller('modalInfoController', modalInfoController);

    modalInfoController.$inject = ['$modalInstance', 'data'];

    function modalInfoController($modalInstance, data) {

        var vm = this;

        if(data && data.hasOwnProperty('actionText')) {
            vm.actionText = data.actionText;
        } else {
            vm.actionText = 'Ok';
        }


        vm.ok = function () {
            $modalInstance.close('ok');
        };

        vm.data = data;
    }

}());
