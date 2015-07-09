(function () {

	angular
		.module('ywPortal')
		.factory('scrambleWordDataService', scrambleWordDataService);

        scrambleWordDataService.$inject = [];

        function scrambleWordDataService () {

            var data = {
                word: '',
                wordArray: [],
                scrambledWordArray: [],
                letterTypedCount: 0
            };

            var service = {
                data: data
            };

            return service;
        }

}());
