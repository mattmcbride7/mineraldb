'use strict';

describe('Controller: MineralsDiasporeCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsDiasporeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsDiasporeCtrl = $controller('MineralsDiasporeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsDiasporeCtrl.awesomeThings.length).toBe(3);
  });
});
