'use strict';

angular.module('Calculator', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'calculator/calculator.html',
    controller: 'CalculatorController',
    controllerAs: 'vm'
  });
}])

.controller('CalculatorController', ['$scope','calculatorService', 
function($scope, calculatorService) 
{ 
  var vm = this;
   
  $scope.$watch(
    function watchNumber(scope){
      return vm.number;
    },
    function handleNumberChange(newValue, oldValue){
      vm.visibile = !isNaN(newValue) && newValue !== null && newValue !== '';
      if(vm.visibile){        
        vm.wholeSeries = calculatorService.getWholeSeries(newValue).join(' ');
        vm.oddSeries = calculatorService.getOddSeries(newValue).join(' ');
        vm.evenSeries = calculatorService.getEvenSeries(newValue).join(' ');
        vm.specialSeries = calculatorService.getSpecialSeries(newValue).join(' ');
        vm.fibonacciSeries = calculatorService.getFibonacciSeries(newValue).join(' '); 
      }else{    
        vm.wholeSeries = '';     
        vm.oddSeries = '';
        vm.evenSeries = '';
        vm.specialSeries = '';
        vm.fibonacciSeries = '';      
      }
    }
  );
  
  return vm;  
  
}]);