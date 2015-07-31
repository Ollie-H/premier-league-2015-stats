 (function(){

 	'use strict';

    // Include angular dependencies
    require('angular');
    require('angular-route');

    var app = angular.module('test', ['ngRoute']);

    // Add router to app
    var router = require('./router/router');
    app.config(router);

    app.factory('SimpleFactory', );

    app.controller('SimpleController', function($scope, SimpleFactory) {
        
        $scope.customers = SimpleFactory.getCustomers();


        $scope.addCustomer = function(){

        	$scope.customers.push({name: $scope.newCustomer.name, city: $scope.newCustomer.city});

        }

    });

})();