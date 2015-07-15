'use strict';

describe('Controller: MineralsCopperCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsCopperCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsCopperCtrl = $controller('MineralsCopperCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsCopperCtrl.awesomeThings.length).toBe(3);
  });
});
