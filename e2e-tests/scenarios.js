'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('NumericSequencesApp', function() {

  beforeEach(function() {
    browser.get('index.html');
  });
  
  it('should have a title', function() {    
    expect(browser.getTitle()).toMatch("Numeric Sequences App");
  });

  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });
  
  it('has 2 menu link buttons', function(){
    var menu  = element.all(by.css('.menu .button'));
    expect(menu.count()).toEqual(2);
  });

  describe('has Sequences page,', function() {

    beforeEach(function() {     
      element(by.linkText('SEQUENCES')).click();
    });

    it('which has a input box. ', function() {
      expect(element(by.css('input')).isPresent()).toBe(true);
    });
    
    describe('if the input box on valid input', function(){
      
      beforeEach(function() {
        element(by.css('input')).sendKeys('10');       
      });
      
      it('shows the output', function(){
        expect(element(by.id('series-container')).isDisplayed()).toBe(true);
      });
      
      it('shows whole series', function(){
        expect(element(by.binding('vm.wholeSeries')).getText()).toEqual('0 1 2 3 4 5 6 7 8 9 10');
      });
      
      it('shows odd series', function(){
        expect(element(by.binding('vm.oddSeries')).getText()).toEqual('1 3 5 7 9');
      });
      
      it('shows even series', function(){
        expect(element(by.binding('vm.evenSeries')).getText()).toEqual('0 2 4 6 8 10');
      });
      
      it('shows special series', function(){
        expect(element(by.binding('vm.specialSeries')).getText()).toEqual('Z 1 2 C 4 E C 7 8 C E');
      });
      
      it('shows fibonacci series', function(){
        expect(element(by.binding('vm.fibonacciSeries')).getText()).toEqual('0 1 1 2 3 5 8');
      });
    });
    
    describe('If the input box on invalid input, ', function(){
      
      var inputControl;
      
      beforeEach(function() {
        inputControl = element(by.css('input'))
        inputControl.sendKeys('-123');             
      });   
      
      it('it should show an help error message that only positive input is allowed.', function(){        
        expect(element(by.css('.help-block')).getText()).toContain('positive');    
      });
      
      it('it should cause syling class invalid added to the control.', function(){
       expect(inputControl.getAttribute('class').then(function (classes) {
          return classes.split(' ').indexOf('ng-invalid') !== 1; 
       })).toBe(true);     
      });
    });
    
    describe('has Sequences page', function() {

      beforeEach(function() {     
        element(by.linkText('HELP')).click();
      });
  
      it('which has instructions', function() {
        expect(element(by.id('instructions')).isPresent()).toBe(true);
      });    
    });  
  });  
});
