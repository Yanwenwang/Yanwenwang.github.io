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
			scrambleWordDataService.playGame();

			// this will listen for keydown event
			var $doc = angular.element(document);
            $doc.on('keydown', function (e) {
            	e.preventDefault();
				scrambleWordService.checkKeyPress(e.which);

				// since this event takes place outside of angular, need scope.apply to update angular
				$scope.$apply();
			});

			// this will trigger on click event
			vm.checkLetterClick = function (letterClicked) {
				scrambleWordService.checkLetterClick(letterClicked);
			};

			vm.resetWord = function () {
				scrambleWordDataService.resetWord();
			};
			
			vm.resetRound = scrambleWordDataService.resetRound;

			$scope.$on('$destroy', function() {

          		scrambleWordDataService.stopCountdown();
        	});
        }

}());
