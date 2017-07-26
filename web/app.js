'use strict';

var urlapi = "http://127.0.0.1:3014/";
//var urlapi = "http://51.255.193.106:3014/";

// Declare app level module which depends on views, and components
angular.module('webApp', [
    'ngRoute',
    'ngMessages',
    'angularBootstrapMaterial',
    'app.navbar',
    'app.main',
    'app.network',
    'app.sankey'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({
            redirectTo: '/main'
        });
    }]);