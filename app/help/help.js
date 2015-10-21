'use strict';

angular.module('Help', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/help', {
    templateUrl: 'help/help.html'    
  });
}]);
