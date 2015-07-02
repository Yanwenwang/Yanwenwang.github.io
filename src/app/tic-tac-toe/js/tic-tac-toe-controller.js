(function () {

	angular
		.module('ywPortal')
		.controller('ticTacToeController', ticTacToeController);

	ticTacToeController.$inject = ['$modal'];

	function ticTacToeController ($modal) {
		var vm = this;

		vm.board = [
			' ', ' ', ' ',
			' ', ' ', ' ',
			' ', ' ', ' '
		];

 		vm.currentPlayer = 'X';

		vm.playTurn = function (boardPosition) {

			if(vm.board[boardPosition] !== ' ') {
				vm.open();
				return;
			}

			if(vm.currentPlayer === 'X') {
				vm.board[boardPosition] = 'X';
				vm.checkWinner(vm.currentPlayer);
				vm.currentPlayer = 'O';
			} else {
				vm.board[boardPosition] = 'O';
				vm.checkWinner(vm.currentPlayer);
				vm.currentPlayer = 'X';
			}


		};

		vm.animationsEnabled = true;

		vm.open = function (size) {
			var modalInstance = $modal.open({
				animation: vm.animationsEnabled,
				templateUrl: './src/app/tic-tac-toe/html/modals/illegal-move.html',
				controller: 'modalInfoController',
				controllerAs: 'modalInfoVM',
				size: size
			});
		};

		vm.restart = function () {
			vm.board = [
				' ', ' ', ' ',
				' ', ' ', ' ',
				' ', ' ', ' '
			];
		};

		vm.checkWinner = function (currentPlayer) {

			if (vm.board[0] === currentPlayer && vm.board[1] === currentPlayer && vm.board[2] === currentPlayer) {
				vm.open();
			}
			if (vm.board[3] === currentPlayer && vm.board[4] === currentPlayer && vm.board[5] === currentPlayer) {
				alert('Congratulations! ' + currentPlayer + ' won!');
			}
			if (vm.board[6] === currentPlayer && vm.board[7] === currentPlayer && vm.board[8] === currentPlayer) {
				alert('Congratulations! ' + currentPlayer + ' won!');
			}

			if (vm.board[0] === currentPlayer && vm.board[3] === currentPlayer && vm.board[6] === currentPlayer) {
				alert('Congratulations! ' + currentPlayer + ' won!');
			}
			if (vm.board[1] === currentPlayer && vm.board[4] === currentPlayer && vm.board[7] === currentPlayer) {
				alert('Congratulations! ' + currentPlayer + ' won!');
			}
			if (vm.board[2] === currentPlayer && vm.board[5] === currentPlayer && vm.board[8] === currentPlayer) {
				alert('Congratulations! ' + currentPlayer + ' won!');
			}

			if (vm.board[0] === currentPlayer && vm.board[4] === currentPlayer && vm.board[8] === currentPlayer) {
				alert('Congratulations! ' + currentPlayer + ' won!');
			}
			if (vm.board[2] === currentPlayer && vm.board[4] === currentPlayer && vm.board[6] === currentPlayer) {
				alert('Congratulations! ' + currentPlayer + ' won!');
			}
		};
	}

}());
