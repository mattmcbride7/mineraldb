'use strict';

describe('Controller: MineralsCalciteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsCalciteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsCalciteCtrl = $controller('MineralsCalciteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsCalciteCtrl.awesomeThings.length).toBe(3);
  });
});
