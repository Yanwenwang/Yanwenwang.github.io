(function(){
  
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
            .otherwise({redirectTo:'/'});
    } 

}());