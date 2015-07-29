 (function(){

 	'use strict';

    // Include angular dependencies
    require('angular');
    require('angular-route');

    window.app = angular.module('test', ['ngRoute']);

    app.config(require('./router/router'));

    require('./services');
    require('./controllers');

})();