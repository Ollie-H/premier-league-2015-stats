 (function(){

 	'use strict';

    // Include angular dependencies
    require('angular');
    require('angular-route');

    var app = angular.module('test', ['ngRoute']);

    app.config(function($routeProvider, $locationProvider){

        // Router - using html5 pushstate
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    	$routeProvider
    		.when('/', 
	    		{
	    			controller: 'SimpleController',
	    			templateUrl: 'src/js/partials/test1.html',
	    		})
    		.when('/test', 
	    		{
	    			controller: 'SimpleController',
	    			templateUrl: 'src/js/partials/test2.html',
	    		});
	});

    app.factory('SimpleFactory', function($http){

        var factory = {};
        var customers = [
            {name: 'ddd test', city: 'zedditch'},
            {name: 'Kames test', city: 'Bedditch'}
        ];

        factory.getCustomers = function(){
            console.log('test');
            return customers;
        }

        return factory;

    });

    app.controller('SimpleController', function($scope, SimpleFactory) {
        
        $scope.customers = SimpleFactory.getCustomers();


        $scope.addCustomer = function(){

        	$scope.customers.push({name: $scope.newCustomer.name, city: $scope.newCustomer.city});



        }

    });

})();