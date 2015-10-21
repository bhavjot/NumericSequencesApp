'use strict';

// Declare app level module which depends on views, and components
angular.module('NumericSequencesApp', [
  'ngRoute',
  'Calculator',
  'Help'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
