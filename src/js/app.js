 (function(){

 	'use strict';

 	// Start google
 	google.load("search", "1");

    // Include angular dependencies
    require('angular');
    require('angular-route');

    window.app = angular.module('test', ['ngRoute', 'app.directives.playerInfo']);

    app.config(require('./router/router'));

    require('./services');
    require('./directives');
    require('./controllers');

})();     