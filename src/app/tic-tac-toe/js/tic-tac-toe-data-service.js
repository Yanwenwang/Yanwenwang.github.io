(function () {

	angular
		.module('ywPortal')
		.factory('ticTacToeDataService', ticTacToeDataService);

		ticTacToeDataService.$inject = ['$timeout', 'modalService'];

        function ticTacToeDataService ($timeout, modalService) {
    		var data = {
    			board: [
		            ' ', ' ', ' ',
		            ' ', ' ', ' ',
		            ' ', ' ', ' '
		        ],
		        animation: '',
		        gameOver: false,
		        currentPlayer: 'X'

    		};

    		var actions = {
    			playTurn: playTurn,
		        restart: restart,
		        getMark: getMark,
		        getAnimation: getAnimation
        	};

    		var service = {
    			data: data,
    			actions: actions
    		};

    		return service;

    		function playTurn (boardPosition) {

	            if (data.gameOver) {
	                return;
	            }

	            if (data.board[boardPosition] !== ' ') {
	               
	                modalService.openMessageModal({
                        title: 'Illegal Move!',
                        body: 'You cannot do that because that spot has already been taken!'
                    });

                    return;
	     
	            }

	            if (data.currentPlayer === 'X') {

	                data.board[boardPosition] = 'X';
	                checkWinner(data.currentPlayer);

	                if(!data.gameOver) {
	                	data.currentPlayer = 'O';
	            	}

	            } else {
	            	
	                data.board[boardPosition] = 'O';
	                checkWinner(data.currentPlayer);

	                if(!data.gameOver) {
	                	data.currentPlayer = 'X';
	                }
	            }

        	}

        	function restart () {
	            data.board = [
	                ' ', ' ', ' ',
	                ' ', ' ', ' ',
	                ' ', ' ', ' '
	            ];

	            data.currentPlayer = 'X';
	            data.gameOver = false;
      		}

      		function getMark (boardPosition) {
	            if (data.board[boardPosition] === 'X') {
	                return 'fa-times';
	            }

	            if (data.board[boardPosition] === 'O') {
	                return 'fa-circle-o';
	            }

	            return;
       		}

       		function getAnimation () {
            	return data.animation;
       		}

       		function winGame () {

       		    data.gameOver = true;
            	data.animation = 'tada';

        		$timeout(function() {

        			modalService.openMessageModal({
                    	title: 'Congratulations!',
                    	body: 'Player ' + data.currentPlayer + ' has won!'
            		});

        		}, 1200);
           	}

        	function checkWinner (currentPlayer) {

	            var emptyBoardPositions = data.board.filter(function (boardPos) {
	                return boardPos === ' ';
	            });

	            if (emptyBoardPositions.length === 0) {

	            	data.gameOver = true;
            		data.animation = 'bounce';
	               
	                modalService.openMessageModal({
	                    title: 'Draw',
	                    body: 'It is a draw, there is no winner in this game!'
                	});
	            }

	            if (data.board[0] === currentPlayer && data.board[1] === currentPlayer && data.board[2] === currentPlayer) {
	            	winGame();
	            }

	            if (data.board[3] === currentPlayer && data.board[4] === currentPlayer && data.board[5] === currentPlayer) {
	                winGame();
	            }

	            if (data.board[6] === currentPlayer && data.board[7] === currentPlayer && data.board[8] === currentPlayer) {
	                 winGame();
	            }

	            if (data.board[0] === currentPlayer && data.board[3] === currentPlayer && data.board[6] === currentPlayer) {
	               winGame();
	            }

	            if (data.board[1] === currentPlayer && data.board[4] === currentPlayer && data.board[7] === currentPlayer) {
	                winGame();
	            }

	            if (data.board[2] === currentPlayer && data.board[5] === currentPlayer && data.board[8] === currentPlayer) {
	                winGame();
	            }

	            if (data.board[0] === currentPlayer && data.board[4] === currentPlayer && data.board[8] === currentPlayer) {
	                winGame();
	            }

	            if (data.board[2] === currentPlayer && data.board[4] === currentPlayer && data.board[6] === currentPlayer) {
	              	winGame();
	            }
       		
       		}


    	}

}());
