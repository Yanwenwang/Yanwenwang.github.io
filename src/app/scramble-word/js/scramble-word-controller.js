(function () {

	angular
		.module('ywPortal')
		.controller('scrambleWordController', scrambleWordController);

		scrambleWordController.$inject = [
			'$scope',
			'scrambleWordDataService',
			'scrambleWordService'
		];

        function scrambleWordController (
			$scope,
			scrambleWordDataService,
			scrambleWordService) {

    		var vm = this;

			// bind data from data service to vm.data
			vm.data = scrambleWordDataService.data;

			// populate data
			scrambleWordDataService.getNewWord();

			// this will listen for keydown event
			var $doc = angular.element(document);
            $doc.on('keydown', function (e) {
				scrambleWordService.checkKeyPress(e.which);

				// since this event takes place outside of angular, need scope.apply to update angular
				$scope.$apply();
			});

			// this will trigger on click event
			vm.checkLetterClick = function (letterClicked) {
				scrambleWordService.checkLetterClick(letterClicked);
			};

			vm.resetGame = function () {
				scrambleWordDataService.resetGame();
				scrambleWordDataService.getNewWord();
			};
			
			vm.resetRound = scrambleWordDataService.resetRound;
        }

}());
