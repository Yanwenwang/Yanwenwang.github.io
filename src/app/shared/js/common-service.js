(function () {

    angular
        .module('ywPortal')
        .factory('commonService', commonService);

    function commonService() {

        var service = {
            getRandomInt: getRandomInt,
            scrambleArray: scrambleArray,
            getLetterPressed: getLetterPressed
        };

        return service;

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function scrambleArray(arr) {

            var scrambledArray = [];

            while (arr.length > 0) {

                var randomIndex = getRandomInt(0, arr.length);
                var randomElement = arr.splice(randomIndex, 1)[0];

                scrambledArray.push(randomElement);
            }

            return scrambledArray;
        }

        function getLetterPressed(which) {

            // which codes for a-z are 65-90

            if(which < 65 || which > 90) {
                return;
            }

            var arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

            var index = which - 65;

            return arr[index];
        }
    }

}());
