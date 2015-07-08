(function () {

	angular
		.module('ywPortal')
		.controller('scrambleWordController', scrambleWordController);

		scrambleWordController.$inject = ['scrambleWordService', 'commonService'];

        function scrambleWordController (scrambleWordService, commonService) {

    		var vm = this;
			
            vm.word = '';
			vm.wordArray = [];
			vm.scrambledWordArray = [];

			scrambleWordService.getNewWord()
				.then(function (newWord) {
					vm.word = newWord;
					vm.wordArray = newWord.split('');
					vm.scrambledWordArray = commonService.scrambleArray(newWord.split(''));
				})
        }

}());
