(function () {

    angular
        .module('ywPortal')
        .factory('scrambleWordDataService', scrambleWordDataService);

    scrambleWordDataService.$inject = ['$interval', '$http', 'commonService', 'modalService'];

    function scrambleWordDataService($interval, $http, commonService, modalService) {

        var data = {
            wordArray: [], // this holds the correct word in array format
            scrambledWordArray: [], // this holds the scrambled word in array format
            letterTypedCount: 0, // this holds the number of valid letters typed
            animation: '', // this is the animation the words will do
            countdown: 60,
            interval: {},
            gameOver: false,
            points: 0 
        }; 

        var service = {
            data: data,
            resetWord: resetWord,
            resetRound: resetRound,
            playGame: playGame,
            stopCountdown: stopCountdown,
            addPoints: addPoints
        };

        return service;

        function getNewWord() {

            // this is the wornik url
            // I increased minCorpusCount to 1000000 so the words made sense
            // higher corpusCount means more common word
            var wordnikUrl = "http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=1000000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=8&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

            // calls wordnik api
            $http.get(wordnikUrl)
                .then(function (response) {

                    // got reponse from wordnik api, check to make sure nothing is falsy
                    if (!response || !response.data || !response.data.word) {
                        // open modal for unable to get word from wordnik
                        modalService.openMessageModal({
                            title: 'Error!',
                            body: 'Could not load wordnik data.'
                        });
                        return;
                    }

                    if(response.data.word.length >= 6) {
                        getNewWord();
                        return;
                    }

                    // make everything lowercase so comparison works with ===
                    var newWord = response.data.word.toLowerCase();

                    // comment out this line to cheat
                    //console.log(newWord);

                    // hold original word as array
                    data.wordArray = newWord.split('');

                    // create scrambled array of objects so we can use ng-class to change color
                    var scrambledWordArray = commonService.scrambleArray(data.wordArray);
                    populatedScrambledArray(scrambledWordArray);
                })
                .catch(function (error) {
                    // open modal for unable to get word from wordnik
                    modalService.openMessageModal({
                        title: 'Error!',
                        body: 'Could not load wordnik data.'
                    });
                });
        }

        function populatedScrambledArray(scrambledWordArray) {
            for (var i = 0; i < scrambledWordArray.length; i++) {
                data.scrambledWordArray.push({
                    letter: scrambledWordArray[i],
                    typed: false
                });
            }
        }

        function resetGame() {
            data.wordArray.length = 0;
            data.scrambledWordArray.length = 0;
            data.letterTypedCount = 0;
        }

        function resetRound() {
            data.letterTypedCount = 0;

            for(var i = 0; i < data.scrambledWordArray.length; i ++) {
                data.scrambledWordArray[i].typed = false;
            }
        }

        function decrementCountdown () {
            data.countdown -= 1;
            if(data.countdown === 0) {

                data.gameOver = true;

                stopCountdown();

                

                // show modal for correct word
                modalService.openMessageModal({
                    title: 'Game over',
                    body: 'The game is over.',
                    actionText: 'Play Again'
                })
                    .then(function (response) {
                        // player clicked 'play again'
                        playGame();
                    })
                    .catch(function (error) {
                        // player did not want to 'play again'
                        alert('do not play again');
                    });

                //open modal show point and play again
                //resetGame();
                //getNewWord();
            }
        }

        function resetWord () {
            resetGame();
            getNewWord();
        }

        function startCountdown () {
            data.countdown = 60;
            data.interval = $interval(decrementCountdown, 1000);
        }

        function playGame () {
            data.gameOver = false;
            resetGame();
            getNewWord();
            startCountdown();
        }

        function stopCountdown () {
            if(data.interval) {
                $interval.cancel(data.interval);
            }
        }

        function addPoints() {
            data.points += 5;
        }
    }

}());
