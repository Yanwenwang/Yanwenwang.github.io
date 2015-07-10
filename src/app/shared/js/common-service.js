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

        // this returns a random number between min and max, not including max
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        // this scrambles an array by randomly splicing an element out of the array and then pushing it into another array
        function scrambleArray(arr) {

            // need to create copy since arr is a reference type
            // modifying arr will modify the actual arr
            var copyArr = arr.slice();

            var scrambledArray = [];

            while (copyArr.length > 0) {

                // splice random element out of array
                var randomIndex = getRandomInt(0, copyArr.length);

                // splice returns array, take first element
                var randomElement = copyArr.splice(randomIndex, 1)[0];

                scrambledArray.push(randomElement);
            }

            return scrambledArray;
        }

        // this functon will turn a event.which number from keydown into a letter
        function getLetterPressed(which) {

            // which codes for a-z are 65-90
            if(which < 65 || which > 90) {
                return;
            }

            var letterArray = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

            // since 65 is a, we just need to subtract 65 and return index of letterArray
            var index = which - 65;

            return letterArray[index];
        }

    }
}());
