(function() {

	angular
		.module('ywPortal')
		.controller('skillsController', skillsController);

	function skillsController() {
		var vm = this;

		vm.groups = [
			{
				groupName: 'HTML/CSS',
				class: 'html-css',
				showDivider: true,
				image:'../content/images/logo-html.png',
				skills: [
					{ name: 'Box model' },
					{ name: 'Bootstrap' },
					{ name: 'Mixins' },
					{ name: 'Media Queries' },
					{ name: 'Responsive Design' },
					{ name: 'SASS' },
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
					{ name: 'ng-bind' },
					{ name: 'ng-click' },
					{ name: 'ng-class' },
					{ name: 'Services' },
					{ name: '$http' },
				 	{ name: 'UI Router' }
				]
			},
			{
				groupName: 'Tools',
				class: 'tools',
				showDivider: true,
				image:'../content/images/logo-tools.png',
				skills: [
					{ name: 'Atom' },
					{ name: 'GitHub' },
				  	{ name: 'SourceTree' },
				 	{ name: 'Sublime Text' },
					{ name: 'Terminal'},
					{ name: 'Trello' }
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
				 	{ name: 'NPM' },
				 	{ name: 'JSHint' }
				]
			}
		];
	}

}());
