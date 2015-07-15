'use strict';

describe('Controller: MineralsCovelliteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsCovelliteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsCovelliteCtrl = $controller('MineralsCovelliteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsCovelliteCtrl.awesomeThings.length).toBe(3);
  });
});
