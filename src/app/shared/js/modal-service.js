(function () {

    angular
        .module('ywPortal')
        .factory('modalService', modalService);

    modalService.$inject = ['$modal'];

    function modalService($modal) {

        var service = {
            openMessageModal: openMessageModal
        };

        return service;

        function openMessageModal(data) {

            var modalInstance = $modal.open({
                animation: true,
                templateUrl: './src/app/shared/html/message-modal.html',
                controller: 'modalInfoController',
                controllerAs: 'modalInfoVM',
                size: 'sm',
                resolve: {
                    data: function () {
                        return data;
                    }
                }
            });

            return modalInstance.result;
        }
    }
}());
