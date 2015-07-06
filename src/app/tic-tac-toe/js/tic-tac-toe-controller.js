(function () {

    angular
        .module('ywPortal')
        .controller('ticTacToeController', ticTacToeController);

    ticTacToeController.$inject = ['$modal'];

    function ticTacToeController($modal) {
        var vm = this;

        vm.board = [
            ' ', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' '
        ];

        vm.gameOver = false;

        vm.currentPlayer = 'X';

        vm.playTurn = function (boardPosition) {

            if (vm.gameOver) {
                return;
            }

            if (vm.board[boardPosition] !== ' ') {
                vm.openIllegalMoveModal();
                return;
            }

            if (vm.currentPlayer === 'X') {
                vm.board[boardPosition] = 'X';
                vm.checkWinner(vm.currentPlayer);
                vm.currentPlayer = 'O';
            } else {
                vm.board[boardPosition] = 'O';
                vm.checkWinner(vm.currentPlayer);
                vm.currentPlayer = 'X';
            }

        };

        vm.openIllegalMoveModal = function () {
            $modal.open({
                animation: true,
                templateUrl: './src/app/tic-tac-toe/html/modals/illegal-move.html',
                controller: 'modalInfoController',
                controllerAs: 'modalInfoVM',
                size: 'sm',
                resolve: {
                    data: function () {
                        return;
                    }
                }
            });
        };

        vm.openDrawModal = function () {

            vm.gameOver = true;

            $modal.open({
                animation: true,
                templateUrl: './src/app/tic-tac-toe/html/modals/draw.html',
                controller: 'modalInfoController',
                controllerAs: 'modalInfoVM',
                size: 'sm',
                resolve: {
                    data: function () {
                        return;
                    }
                }
            });
        };

        vm.openCongratsModal = function (currentPlayer) {

            vm.gameOver = true;

            $modal.open({
                animation: true,
                templateUrl: './src/app/tic-tac-toe/html/modals/congratulations.html',
                controller: 'modalInfoController',
                controllerAs: 'modalInfoVM',
                size: 'sm',
                resolve: {
                    data: function () {
                        return currentPlayer;
                    }
                }
            });
        };

        vm.restart = function () {
            vm.board = [
                ' ', ' ', ' ',
                ' ', ' ', ' ',
                ' ', ' ', ' '
            ];

            vm.currentPlayer = 'X';
            vm.gameOver = false;
        };

        vm.getMark = function (boardPosition) {
            if (vm.board[boardPosition] === 'X') {
                return 'fa-times';
            }

            if (vm.board[boardPosition] === 'O') {
                return 'fa-circle-o';
            }

            return;
        };

        vm.checkWinner = function (currentPlayer) {

            var emptyBoardPositions = vm.board.filter(function (boardPos) {
                return boardPos === ' ';
            });

            if (emptyBoardPositions.length === 0) {
                vm.openDrawModal();
            }

            if (vm.board[0] === currentPlayer && vm.board[1] === currentPlayer && vm.board[2] === currentPlayer) {
                vm.openCongratsModal(currentPlayer);
            }

            if (vm.board[3] === currentPlayer && vm.board[4] === currentPlayer && vm.board[5] === currentPlayer) {
                vm.openCongratsModal(currentPlayer);
            }

            if (vm.board[6] === currentPlayer && vm.board[7] === currentPlayer && vm.board[8] === currentPlayer) {
                vm.openCongratsModal(currentPlayer);
            }

            if (vm.board[0] === currentPlayer && vm.board[3] === currentPlayer && vm.board[6] === currentPlayer) {
                vm.openCongratsModal(currentPlayer);
            }

            if (vm.board[1] === currentPlayer && vm.board[4] === currentPlayer && vm.board[7] === currentPlayer) {
                vm.openCongratsModal(currentPlayer);
            }

            if (vm.board[2] === currentPlayer && vm.board[5] === currentPlayer && vm.board[8] === currentPlayer) {
                vm.openCongratsModal(currentPlayer);
            }

            if (vm.board[0] === currentPlayer && vm.board[4] === currentPlayer && vm.board[8] === currentPlayer) {
                vm.openCongratsModal(currentPlayer);
            }

            if (vm.board[2] === currentPlayer && vm.board[4] === currentPlayer && vm.board[6] === currentPlayer) {
                vm.openCongratsModal(currentPlayer);
            }
        };
    }

}());
