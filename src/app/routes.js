(function() {

	angular
		.module('ywPortal')
		.config(routes);

	routes.$inject = ['$routeProvider'];

	function routes($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: './app/home/html/home.html',
                controller: 'homeController',
                controllerAs: 'homeVM'
			})
			.when('/resume', {
				templateUrl: './app/resume/html/resume.html',
				controller: 'resumeController',
				controllerAs: 'resumeVM'
			})
			.when('/projects', {
				templateUrl: './app/projects/html/projects.html',
				controller: 'projectsController',
				controllerAs: 'projectsVM'
			})
			.when('/about', {
				templateUrl: './app/about/html/about.html',
				controller: 'aboutController',
				controllerAs: 'aboutVM'
			})
			.when('/contact', {
				templateUrl: './app/contact/html/contact.html',
				controller: 'contactController',
				controllerAs: 'contactVM'
			})
			.otherwise({redirectTo:'/'});

	}

}());