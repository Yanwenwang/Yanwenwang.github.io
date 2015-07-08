(function () {

    angular
        .module('ywPortal')
        .factory('commonService', commonService);

    function commonService() {

        var service = {
            getRandomInt: getRandomInt,
            scrambleArray: scrambleArray
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
    }

}());
