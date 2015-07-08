(function () {

	angular
		.module('ywPortal')
		.factory('scrambleWordService', scrambleWordService);

        scrambleWordService.$inject = ['$http'];

        function scrambleWordService ($http) {

            var wordnikUrl = "http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=1000000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=8&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

            var service = {
                getNewWord: getNewWord
            };

            return service;

            function getNewWord () {
                return $http.get(wordnikUrl)
                    .then(function (response) {
                        if(!response || response.data || response.data.word) {
                            // open modal for unable to get word from wordnik
                        }

                        return response.data.word;
                    })
                    .catch(function (error) {
                        // open modal for unable to get word from wordnik
                    });
            }
        }

}());
