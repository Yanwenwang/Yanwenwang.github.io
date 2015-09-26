(function () {

    angular
        .module('ywPortal')
        .controller('ticTacToeController', ticTacToeController);

    ticTacToeController.$inject = ['$modal', '$timeout', 'ticTacToeDataService'];

    function ticTacToeController($modal, $timeout, ticTacToeDataService) {
        var vm = this;
        vm.data = ticTacToeDataService.data;
        vm.actions = ticTacToeDataService.actions;
    }

}());
