(function() {

	angular
		.module('ywPortal')
		.controller('resumeController', resumeController);

	function resumeController() {
		var vm = this;

		vm.groups = [
			
			{ 
				groupName: 'HTML/CSS', 
				skills: [ 
					{ name: 'Animate.css' },
					{ name: 'Box model' },
					{ name: 'Bootstrap' },
					{ name: 'Sass' },
					{ name: 'Transitions' }
		 			
		 			
				]
			},
			{
				groupName: 'JavaScript',
				skills: [
					{ name: 'Closure' },
					{ name: 'Callbacks' },
					{ name: 'Hoisting' },
					{ name: 'IIFE' },
					{ name: 'JSON' },
					{ name: 'Scope' },
					{ name: 'Truthy/Falsy'}
				]
			},
			{
				groupName: 'AngularJS',
				skills: [
					{ name: 'Controllers' },
				 	{ name: 'ControllerAs' },
					{ name: 'Directives' },
					{ name: 'ng-class' },
				 	{ name: 'ng-bind' },
				 	{ name: 'Routing' },
				 	{ name: 'Services' },
				 	{ name: '$http' },
				 	{ name: '$location' }
				]
			},
			{
				groupName: 'Tools',
				skills: [
					{ name: 'Github' },
				    { name: 'SourceTree' },
				 	{ name: 'Sublime Text' },
					{ name: 'Terminal' }
				]
			},
			{
				groupName: 'Automation',
				skills: [
					{ name: 'Browsersync' },
					{ name: 'Bower' },
					{ name: 'Gulp' },
				 	{ name: 'Npm' },
				 	{ name: 'Jshint' }
				]
			},
			{
				groupName: 'Methodology',
				skills: [
					{ name: 'Scrum' }
				]
			}
		];

	}

}());