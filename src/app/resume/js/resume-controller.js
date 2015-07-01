(function() {

	angular
		.module('ywPortal')
		.controller('resumeController', resumeController);

	function resumeController() {
		var vm = this;

		vm.groups = [

			{
				groupName: 'HTML/CSS',
				class: 'html-css',
				showDivider: true,
				image:'../content/images/logo-html.png',
				skills: [
					{ name: 'Animate.css' },
					{ name: 'Box model' },
					{ name: 'Bootstrap' },
					{ name: 'Responsive Design' },
					{ name: 'Sass' },
					{ name: 'Transitions' }


				]
			},
			{
				groupName: 'JavaScript',
				class: 'js',
				showDivider: true,
				image:'../content/images/logo-js.png',
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
				class: 'angular',
				showDivider: true,
				image:'../content/images/logo-angular.png',
				skills: [
					{ name: 'Angular UI Bootstrap' },
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
				class: 'tools',
				showDivider: true,
				image:'../content/images/logo-tools.png',
				skills: [
					{ name: 'Atom' },
					{ name: 'Github' },
				  { name: 'SourceTree' },
				 	{ name: 'Sublime Text' },
					{ name: 'Terminal' }
				]
			},
			{
				groupName: 'Automation',
				class: 'automation',
				showDivider: false,
				image:'../content/images/logo-bower.png',
				skills: [
					{ name: 'Browsersync' },
					{ name: 'Bower' },
					{ name: 'Gulp' },
				 	{ name: 'Npm' },
				 	{ name: 'Jshint' }
				]
			}
		];

	}

}());
