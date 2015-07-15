'use strict';

describe('Controller: MineralsDiamondCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsDiamondCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsDiamondCtrl = $controller('MineralsDiamondCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsDiamondCtrl.awesomeThings.length).toBe(3);
  });
});
