'use strict';

describe('Calulator module: ', function() {

  beforeEach(module('Calculator'));
  
  var vm, scope, calculatorService;
  calculatorService = {};
  calculatorService.getWholeSeries = function(){ return [1,2, 3, 4, 5]; };
  calculatorService.getOddSeries = function(){ return [1, 3, 5]; };
  calculatorService.getEvenSeries = function(){ return [0, 2, 4]; };
  calculatorService.getSpecialSeries = function(){ return [1,'C','Z']; };
  calculatorService.getFibonacciSeries = function(){ return [0, 1, 1, 2, 3, 5]; };
    
  
  describe('For Calculator controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
       scope = $rootScope.$new();
      //spec body
      var CalculatorController = $controller('CalculatorController',{ 
        $scope: scope,
        calculatorService: calculatorService
      });
      expect(CalculatorController).toBeDefined();
    }));

  });
  
 
 

  function createControllerAndRunDigestCycle(inputNumber, $controller, $rootScope ){
    scope = $rootScope.$new();
           
    var vm = $controller('CalculatorController', {
      $scope: scope,
      calculatorService: calculatorService
    });
    vm.number = inputNumber;
    scope.$apply();
    return vm;
  }
  
  
  describe ('if parameter is number 9 then', function(){
    beforeEach(inject(function ($controller, $rootScope) {
      vm = createControllerAndRunDigestCycle(9, $controller, $rootScope );   
    }));    
    it('All series should be visible', function () {
      expect(vm.visibile).toBe(true);
    });
    
    it('Whole series should be separated by spaces', function () {
      expect(vm.wholeSeries).toBe('1 2 3 4 5');
    });
    
    it('Odd series should be separated by spaces', function () {
      expect(vm.oddSeries).toBe('1 3 5');
    });
    
    it('Even series should be separated by spaces', function () {
      expect(vm.evenSeries).toBe('0 2 4');
    });
    
    it('Special series should be separated by spaces', function () {
      expect(vm.specialSeries).toBe('1 C Z');
    });
    
    it('Fibonacci series should be separated by spaces', function () {
      expect(vm.fibonacciSeries).toBe('0 1 1 2 3 5');
    });    
  });  
  
  describe ('if parameter is number is not a number', function(){
     beforeEach(inject(function ($controller, $rootScope) {
      vm = createControllerAndRunDigestCycle(undefined, $controller, $rootScope );   
    }));    
    it('All series should be hidden', function () {
      expect(vm.visibile).toBe(false);
    });
    
    it('Whole series should be empty string', function () {
      expect(vm.wholeSeries).toBe('');
    });
    
    it('Odd series should be empty string', function () {
      expect(vm.oddSeries).toBe('');
    });
    
    it('Even series should be empty string', function () {
      expect(vm.evenSeries).toBe('');
    });
    
    it('Special series should be empty string', function () {
      expect(vm.specialSeries).toBe('');
    });
    
    it('Fibonacci series should be empty string', function () {
      expect(vm.fibonacciSeries).toBe('');
    });    
  });
  
  describe ('if parameter is number is null', function(){
     beforeEach(inject(function ($controller, $rootScope) {
      vm = createControllerAndRunDigestCycle(null, $controller, $rootScope );   
    }));    
    
    it('All series should be hidden', function () {
      expect(vm.visibile).toBe(false);
    });
    
    it('Whole series should be empty string', function () {
      expect(vm.wholeSeries).toBe('');
    });
    
    it('Odd series should be empty string', function () {
      expect(vm.oddSeries).toBe('');
    });
    
    it('Even series should be empty string', function () {
      expect(vm.evenSeries).toBe('');
    });
    
    it('Special series should be empty string', function () {
      expect(vm.specialSeries).toBe('');
    });
    
    it('Fibonacci series should be empty string', function () {
      expect(vm.fibonacciSeries).toBe('');
    });    
  });
  describe ('if parameter is number is empty string', function(){
     beforeEach(inject(function ($controller, $rootScope) {
      vm = createControllerAndRunDigestCycle('', $controller, $rootScope );   
    }));    
    
    it('All series should be hidden', function () {
      expect(vm.visibile).toBe(false);
    });
    
    it('Whole series should be empty string', function () {
      expect(vm.wholeSeries).toBe('');
    });
    
    it('Odd series should be empty string', function () {
      expect(vm.oddSeries).toBe('');
    });
    
    it('Even series should be empty string', function () {
      expect(vm.evenSeries).toBe('');
    });
    
    it('Special series should be empty string', function () {
      expect(vm.specialSeries).toBe('');
    });
    
    it('Fibonacci series should be empty string', function () {
      expect(vm.fibonacciSeries).toBe('');
    });    
  });       
});