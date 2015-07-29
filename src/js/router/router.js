var Routes = function($routeProvider, $locationProvider){

        // Router - using html5 pushstate
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });

    	$routeProvider
			.when('/', 
    		{
    			controller: 'HomeController',
    			templateUrl: 'src/js/partials/test1.html',
    		})
			.when('/test', 
    		{
    			controller: 'SimpleController',
    			templateUrl: 'src/js/partials/test2.html',
    		});
};

module.exports = Routes;