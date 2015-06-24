(function () {
	
	angular
		.module('ywPortal')
		.controller('ticTacToeController', ticTacToeController);

	function ticTacToeController () {
		var vm = this;

		vm.board = [
			' ', ' ', ' ', 
			' ', ' ', ' ', 
			' ', ' ', ' '
		];

 		vm.currentPlayer = 'X';

		vm.playTurn = function (boardPosition) {

			if(vm.board[boardPosition] !== ' ') {
				alert('You can\'t do this!');
				return;
			}

			if(vm.currentPlayer === 'X') {
				vm.board[boardPosition] = 'O';
				vm.currentPlayer = 'O';
			} else {
				vm.board[boardPosition] = 'X';
				vm.currentPlayer = 'X';
			}
		}
	}
	
}());