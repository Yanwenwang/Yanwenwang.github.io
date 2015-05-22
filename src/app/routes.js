(function() {

	angular
		.module('ywPortal')
		.config(routes);

	routes.$inject = ['$routeProvider'];

	function routes($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: './src/app/home/html/home.html',
                controller: 'homeController',
                controllerAs: 'homeVM'
			})
			.when('/resume', {
				templateUrl: './src/app/resume/html/resume.html',
				controller: 'resumeController',
				controllerAs: 'resumeVM'
			})
			.when('/projects', {
				templateUrl: './src/app/projects/html/projects.html',
				controller: 'projectsController',
				controllerAs: 'projectsVM'
			})
			.when('/about', {
				templateUrl: './src/app/about/html/about.html',
				controller: 'aboutController',
				controllerAs: 'aboutVM'
			})
			.when('/contact', {
				templateUrl: './src/app/contact/html/contact.html',
				controller: 'contactController',
				controllerAs: 'contactVM'
			})
			.otherwise({redirectTo:'/'});

	}

}());