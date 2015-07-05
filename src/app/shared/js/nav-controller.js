(function () {

    angular
        .module('ywPortal')
        .controller('navController', navController);

    navController.$inject = ['$rootScope'];

    function navController($rootScope) {

        var vm = this;

        vm.showMobileNav = false;

        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                vm.showMobileNav = false;
            });
    }

}());
