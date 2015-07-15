'use strict';

describe('Controller: MineralsRomanechiteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsRomanechiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsRomanechiteCtrl = $controller('MineralsRomanechiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsRomanechiteCtrl.awesomeThings.length).toBe(3);
  });
});
