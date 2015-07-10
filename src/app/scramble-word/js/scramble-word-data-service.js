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
                data: data,
				resetData: resetData
            };

            return service;

			function resetData() {
				data.word = '';
				data.wordArray.length = 0;
				data.scrambledWordArray.length = 0;
				data.letterTypedCount = 0;
			}
        }

}());
