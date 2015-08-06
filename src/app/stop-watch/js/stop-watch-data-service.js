(function () {

    angular
        .module('ywPortal')
        .factory('stopWatchDataService', stopWatchDataService);

        stopWatchDataService.$inject = [ '$interval' ];

        function stopWatchDataService ($interval) {

        	var data = {
        		minutes: '00',
        		seconds: '00',
        		milliseconds: '000',
        		interval: null,
        		intTime: 0
        	};

        	var actions = {
		        start: start,
		        stop: stop,
		        reset: reset
        	};

        	var service = {
        		data: data,
        		actions: actions
        	};

        	return service;

        	function countMilliseconds () {
		        var currentTime = new Date().getTime();
		        var elapsedTime = currentTime - data.intTime;

		        data.milliseconds = elapsedTime;


		        if(data.milliseconds > 60000) {
		        	data.minutes = Math.floor(data.milliseconds / 60000);

		        	if(data.minutes < 10) {
		        		data.minutes = '0' + data.minutes;
		        	}

		        	data.milliseconds = data.milliseconds - 60000 * data.minutes;
		        }

		        if(data.milliseconds > 1000) {
		        	data.seconds = Math.floor(data.milliseconds / 1000);

		        	if(data.seconds < 10) {
		        		data.seconds = '0' + data.seconds;
		        	}

		        	data.milliseconds = data.milliseconds - 1000 * data.seconds;
		        } else {
		        	data.seconds = '00';
		        }

		        if(data.milliseconds < 10) {
		        	data.milliseconds = '00' + data.milliseconds;
		        } else if(data.milliseconds < 100) {
		        	data.milliseconds = '0' + data.milliseconds;
		        }
        	}

	  		function start() {
		        if(data.interval) {
		            // do nothing because you cannot start a watch that is already started
		            return;
		        }
		        
		        // start stopwatch
		        data.intTime = new Date().getTime();
		        data.interval = $interval(countMilliseconds, 100);
		    }

	    	function stop() {

		        if(!data.interval) {
		            // do nothing because you cannot stop a watch that is already stopped
		            return;
		        }
		        
		        // stop stop watch
                $interval.cancel(data.interval);
                data.interval = null;
		    }
	    
		    function reset() {
		        
		        // set all variables to default values
		        data.minutes = '00';
		        data.seconds = '00';
		        data.milliseconds = '000';
		        data.intTime = 0;

		        if(data.interval) {
                	$interval.cancel(data.interval);
		        }
		    }
        }


}());