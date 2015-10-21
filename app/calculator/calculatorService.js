'use strict';

angular.module('Calculator')

.factory('calculatorService', [function() {   
  function getWholeSeries(upto)
  {
    var _wholeSeries = [];
    var i = 0;
    while(i <= upto){
       _wholeSeries.push(i);
       i++;
    }  
    return _wholeSeries;       
  }  
  
  function getOddSeries(upto)
  {
    var _oddSeries = [];
    var i = 1;
    while(i <= upto){
       _oddSeries.push(i);
       i=i+2;
    }  
    return _oddSeries;       
  }  
    
  function getEvenSeries(upto)
  {
    var _evenSeries = [];
    var i = 0;
    while(i <= upto){
       _evenSeries.push(i);
       i=i+2;
    } 
    return _evenSeries;        
  }  
    
  function getSpecialSeries(upto)
  {
     var _specialSeries = [];
     var i = 0;
     while(i <= upto)
     {
      if (i%3 == 0 && i%5 == 0){
        _specialSeries.push('Z');
      }
      else if (i%3 == 0){
        _specialSeries.push('C');
      }
      else if (i%5 == 0){
        _specialSeries.push('E');
      }
      else{
        _specialSeries.push(i);
      }  
      i++;  
     }  
     return _specialSeries;
  }
  
  function getFibonacciSeries(upto)
  {
    var _fibonacciSeries = [];
    var a = 0;
    var b = 1;
    if (upto >=1) _fibonacciSeries.push (a);        
    var i = a + b;
    while(i <= upto)
    {          
      _fibonacciSeries.push(i);          
      i = a +b;
      a = b;
      b = i;
    }
    return _fibonacciSeries;
  }
    
  return{
    getWholeSeries: getWholeSeries,
    getOddSeries: getOddSeries,
    getEvenSeries: getEvenSeries,
    getSpecialSeries: getSpecialSeries,   
    getFibonacciSeries: getFibonacciSeries
  };
}]);