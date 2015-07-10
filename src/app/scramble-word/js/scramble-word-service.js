(function () {

	angular
		.module('ywPortal')
		.factory('scrambleWordService', scrambleWordService);

        scrambleWordService.$inject = ['scrambleWordDataService', 'commonService', 'modalService'];

        function scrambleWordService (scrambleWordDataService, commonService, modalService) {

            var service = {
				checkKeyPress: checkKeyPress
            };

            return service;

			function checkKeyPress(which) {

				// check to see if alphabetic letter was pressed
				var letterPressed = commonService.getLetterPressed(which);

				// if no letter was pressed, return
				if(!letterPressed) {
					return;
				}

				// if letter was pressed, check to see if it is valid
				checkValidLetter(letterPressed);
			}

			function checkValidLetter(letterPressed) {

				var validLetterArr = [];

				// find all letters that have not been typed and push into valid letter array
				// for loop starts at typed letters index
				for(var i = scrambleWordDataService.data.letterTypedCount; i < scrambleWordDataService.data.scrambledWordArray.length; i ++) {
					validLetterArr.push(scrambleWordDataService.data.scrambledWordArray[i].letter);
				}

				// check to see if valid letter in the not typed yet array
				var indexOfLetterPressInValidLetterArray = validLetterArr.indexOf(letterPressed);

				// if no valid letter pressed, return
				if(indexOfLetterPressInValidLetterArray === -1) {
					return;
				}

				// add type count back to index, since index is actually of just non-typed letters, not whole array
				var indexOfLetterPressedInScrambledArray = indexOfLetterPressInValidLetterArray + scrambleWordDataService.data.letterTypedCount;

				// move letter to correct position
				moveLetter(indexOfLetterPressedInScrambledArray);
			}

			function moveLetter(indexOfLetterPressedInScrambledArray) {

				// splice pressed letter object out of array
				var splicedElementArray = scrambleWordDataService.data.scrambledWordArray.splice(indexOfLetterPressedInScrambledArray, 1);

				// splice returns array, take first element
				var splicedElement = splicedElementArray[0];

				// style letter through ng-class by making typed true
				splicedElement.typed = true;

				// splice letter object into array, so that all elements are pushed down
				scrambleWordDataService.data.scrambledWordArray.splice(scrambleWordDataService.data.letterTypedCount, 0, splicedElement);

				// increase letter typed count
				scrambleWordDataService.data.letterTypedCount++;

				// check for win condition
				checkForWinCondition();
			}

			function checkForWinCondition() {

				if(scrambleWordDataService.data.letterTypedCount !== scrambleWordDataService.data.scrambledWordArray.length) {
					// if letters typed is not equal to word length, return
					return;
				}

				var match = checkIfWordMatches();

				if(match) {
					// show modal for correct word
					modalService.openMessageModal({
						title: 'Correct Word!',
						body: 'Good job.'
					});

					// reset the data so everything is back to empty
					scrambleWordDataService.resetGame();

					// get new word, which will start the game over
					scrambleWordDataService.getNewWord();
				} else {
					// show modal for wrong word
					modalService.openMessageModal({
						title: 'Wrong Word!',
						body: 'Please try again.'
					});

					// reset round
					scrambleWordDataService.resetRound();
				}
			}

			function checkIfWordMatches() {
				// loop through array to check to see if any of the
				for(var i = 0; i < scrambleWordDataService.data.scrambledWordArray.length; i ++) {

					// if the letters do not match is the scrambledArray and the original array, return false
					if(scrambleWordDataService.data.scrambledWordArray[i].letter != scrambleWordDataService.data.wordArray[i]) {
						return false;
					}
				}

				// if all letters match, return true
				return true;
			}
        }

}());
