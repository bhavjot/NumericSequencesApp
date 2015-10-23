'use strict';

describe('Calulator module: ', function() {

  beforeEach(module('Calculator'));
  var  _calculatorService;
  
  beforeEach(inject(['calculatorService', function (calculatorService) {    
    _calculatorService = calculatorService;
  }]));
  
  describe ('Checking series output:  ', function(){     
    it('All series should be correct', function () {
      expect(_calculatorService.getWholeSeries(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
        
    it('Odd series should be correct', function () {
      expect(_calculatorService.getOddSeries(10)).toEqual([1, 3, 5, 7, 9]);
    });
    
    it('Even series should be correct', function () {
      expect(_calculatorService.getEvenSeries(10)).toEqual([0, 2, 4, 6, 8, 10]);
    });
    
    it('Special series should be correct', function () {
      expect(_calculatorService.getSpecialSeries(15)).toEqual(['Z', 1, 2, 'C', 4, 'E', 'C', 7, 8, 'C','E', 11, 'C', 13,14,'Z']);
    });
    
    it('Fibonacci series should be correct', function () {
      expect(_calculatorService.getFibonacciSeries(8)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    });
  });  
});