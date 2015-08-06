(function() {

	angular
		.module('ywPortal')
		.config(routes);

	routes.$inject = ['$stateProvider', '$urlRouterProvider'];

	function routes($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('main', {
				abstract: true,
				url: '/',
				views: {
					'navbar': {
						templateUrl: './src/app/shared/html/navbar.html',
						controller: 'navController',
						controllerAs: 'navVM'
					},
					'footer': {
						templateUrl: './src/app/shared/html/footer.html'
					}
				}
			})

			.state('main.home', {
				url: 'home',
				views: {
					'content@': {
						templateUrl: './src/app/home/html/home.html',
						controller: 'homeController',
						controllerAs: 'homeVM'
					}
				}
			})

			.state('main.resume', {
				url: 'resume',
				views: {
					'content@': {
						templateUrl: './src/app/resume/html/resume.html',
						controller: 'resumeController',
						controllerAs: 'resumeVM'
					}
				}
			})

			.state('main.projects', {
				url: 'projects',
				views: {
					'content@': {
						templateUrl: './src/app/projects/html/projects.html',
						controller: 'projectsController',
						controllerAs: 'projectsVM'
					}
				}
			})

			.state('main.contact', {
				url: 'contact',
				views: {
					'content@': {
						templateUrl: './src/app/contact/html/contact.html',
						controller: 'contactController',
						controllerAs: 'contactVM'
					}
				}
			})

			.state('main.tic-tac-toe', {
				url: 'tic-tac-toe',
				views: {
					'content@': {
						templateUrl: './src/app/tic-tac-toe/html/tic-tac-toe.html',
						controller: 'ticTacToeController',
						controllerAs: 'ticTacToeVM'
					}
				}
			})

			.state('main.sudouku', {
				url: 'sudouku',
				views: {
					'content@': {
						templateUrl: './src/app/sudouku/html/sudouku.html',
						controller: 'sudoukuController',
						controllerAs: 'sudoukuVM'
					}
				}
			})

			.state('main.scramble-word', {
				url: 'scramble-word',
				views: {
					'content@': {
						templateUrl: './src/app/scramble-word/html/scramble-word.html',
						controller: 'scrambleWordController',
						controllerAs: 'scrambleWordVM'
					}
				}
			})

			.state('main.to-do-list', {
				url: 'to-do-list',
				views: {
					'content@': {
						templateUrl: './src/app/to-do-list/html/to-do-list.html',
						controller: 'toDoListController',
						controllerAs: 'toDoListVM'
					}
				}
			})

			.state('main.stop-watch', {
				url: 'stop-watch',
				views: {
					'content@': {
						templateUrl: './src/app/stop-watch/html/stop-watch.html',
						controller: 'stopWatchController',
						controllerAs: 'stopWatchVM'
					}
				}
			});
	}

}());
