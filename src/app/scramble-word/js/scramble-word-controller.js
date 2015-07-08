(function () {

	angular
		.module('ywPortal')
		.controller('scrambleWordController', scrambleWordController);

		scrambleWordController.$inject = ['$scope', 'scrambleWordService', 'commonService'];

        function scrambleWordController ($scope, scrambleWordService, commonService) {

    		var vm = this;

			vm.letterPressed = '';

			var $doc = angular.element(document);
            $doc.on('keydown', function (e) {
				var letterPressed = commonService.getLetterPressed(e.which);

				if(!letterPressed) {
					return;
				}

				vm.letterPressed = letterPressed;
				$scope.$apply();
			});

            vm.word = '';
			vm.wordArray = [];
			vm.scrambledWordArray = [];

			scrambleWordService.getNewWord()
				.then(function (newWord) {
					vm.word = newWord.toLowerCase();
					vm.wordArray = newWord.toLowerCase().split('');
					vm.scrambledWordArray = commonService.scrambleArray(newWord.toLowerCase().split(''));
				});
        }

}());
