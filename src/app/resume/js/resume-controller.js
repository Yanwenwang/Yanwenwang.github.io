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
					{ name: 'sass' },
					{ name: 'box model' },
					{ name: 'transitions' },
		 			{ name: 'bootstrap' },
		 			{ name: 'animate.css' }
				]
			},
			{
				groupName: 'JavaScript',
				skills: [
					{ name: 'IIFE' },
					{ name: 'closure' },
					{ name: 'hoisting' },
					{ name: 'scope' },
				 	{ name: 'JSON' },
					{ name: 'callbacks' },
					{ name: 'truthy/falsy'}
				]
			},
			{
				groupName: 'AngularJS',
				skills: [
					{ name: 'directives' },
					{ name: 'controllers' },
				 	{ name: 'controllerAs' },
				 	{ name: 'services' },
				 	{ name: 'routing' },
				 	{ name: 'ng-class' },
				 	{ name: 'ng-bind' },
				 	{ name: '$http' },
				 	{ name: '$location' }
				]
			},
			{
				groupName: 'Tools',
				skills: [
				 	{ name: 'Sublime Text' },
					{ name: 'Terminal' },
					{ name: 'Github' },
				    { name: 'SourceTree' }
				]
			},
			{
				groupName: 'Automation',
				skills: [
				 	{ name: 'npm' },
				 	{ name: 'bower' },
				 	{ name: 'gulp' },
				 	{ name: 'browsersync' },
				 	{ name: 'jshint' }
				]
			},
			{
				groupName: 'Methodologies',
				skills: [
					{ name: 'Scrum' }
				]
			}
		];

	}

}());