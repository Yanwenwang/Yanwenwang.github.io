(function () {

    angular
        .module('ywPortal')
        .controller('ticTacToeController', ticTacToeController);

    ticTacToeController.$inject = ['$modal', '$timeout'];

    function ticTacToeController($modal, $timeout) {
        var vm = this;

        vm.board = [
            ' ', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' '
        ];

        vm.animation = '';

        vm.getAnimation = function () {
            return vm.animation;
        };

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
            vm.animation = 'shake';

            $timeout(function () {
                vm.animation = '';

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

            }, 1200);
        };

        vm.openDrawModal = function () {

            vm.gameOver = true;
            vm.animation = 'bounce';

            $timeout(function () {
                vm.animation = '';

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

            }, 1200);
        };

        vm.openCongratsModal = function (currentPlayer) {

            vm.gameOver = true;
            vm.animation = 'tada';

            $timeout(function () {

                vm.animation = '';

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

            }, 1200);
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
