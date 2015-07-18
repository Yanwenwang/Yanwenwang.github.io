(function () {

	angular
		.module('ywPortal')
		.factory('scrambleWordService', scrambleWordService);

        scrambleWordService.$inject = ['$timeout', 'scrambleWordDataService', 'commonService', 'modalService'];

        function scrambleWordService ($timeout, scrambleWordDataService, commonService, modalService) {

            var service = {
				checkKeyPress: checkKeyPress,
				checkLetterClick: checkLetterClick
            };

            return service;

            function backSpaceLetter () {
            	var lastIndexOfLastTyped = scrambleWordDataService.data.letterTypedCount - 1;
            	scrambleWordDataService.data.scrambledWordArray[lastIndexOfLastTyped].typed = false;
            	scrambleWordDataService.data.letterTypedCount --;
            }

			function checkKeyPress(which) {
				if (scrambleWordDataService.data.gameOver) {
					return;
				}

				if(commonService.getBackSpace(which)) {
					backSpaceLetter();
				}

				// check to see if alphabetic letter was pressed
				var letterPressed = commonService.getLetterPressed(which);

				// if no letter was pressed, return
				if(!letterPressed) {
					return;
				}

				// if letter was pressed, check to see if it is valid
				checkValidLetter(letterPressed);
			}

			function checkLetterClick(letterClicked) {

				if (scrambleWordDataService.data.gameOver) {
					return;
				}

				checkValidLetter(letterClicked);
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

				var wordMatches = checkIfWordMatches();

				if(wordMatches) {
					
					scrambleWordDataService.addPoints(); 

					// play tada animation
					scrambleWordDataService.data.animation = 'tada';

					// show modal after 1200 ms
					$timeout(function () {
						scrambleWordDataService.data.animation = '';
						scrambleWordDataService.resetWord();
					}, 1200);


				} else {

					// play shake animation
					scrambleWordDataService.data.animation = 'shake';

					$timeout(function () {
						scrambleWordDataService.data.animation = '';
						scrambleWordDataService.resetRound();
					}, 1200);
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
