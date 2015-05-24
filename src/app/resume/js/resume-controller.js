(function() {

	angular
		.module('ywPortal')
		.controller('resumeController', resumeController);

	function resumeController() {
		var vm = this;

		vm.groups = [
			{
				groupName: 'HTML'
			},
			{ 
				groupName: 'CSS', 
				skills: [ 
					{ name: 'Sass' },
					{ name: 'Box model' },
					{ name: 'Transitions' },
		 			{ name: 'Bootstrap' },
		 			{ name: 'Animate.css' }
				]
			},
			{
				groupName: 'JavaScript',
				skills: [
					{ name: 'IIFE' },
					{ name: 'Closure' },
					{ name: 'Hoisting' },
					{ name: 'Scope' },
				 	{ name: 'JSON' },
					{ name: 'Callbacks' },
					{ name: 'Truthy/Falsy'}
				]
			},
			{
				groupName: 'AngularJS',
				skills: [
					{ name: 'Directives' },
					{ name: 'controllers' },
				 	{ name: 'controllerAs' },
				 	{ name: 'Services' },
				 	{ name: 'Routing' },
				 	{ name: 'ng-class' },
				 	{ name: 'ng-bind' },
				 	{ name: '$http' },
				 	{ name: '$location' }
				]
			},
			{
				groupName: 'Git',
				skills: [
					{ name: 'Github' },
				    { name: 'SourceTree' }
				]
			},
			{
				groupName: 'Mac',
				skills: [
					{ name: 'Terminal' },
				 	{ name: 'npm' },
				 	{ name: 'Bower' },
				 	{ name: 'Jshint' }
				]
			},
			{
				groupName: 'IDEs',
				skills: [
					{ name: 'Sublime Text' }
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