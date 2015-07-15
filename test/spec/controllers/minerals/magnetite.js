'use strict';

describe('Controller: MineralsMagnetiteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsMagnetiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsMagnetiteCtrl = $controller('MineralsMagnetiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsMagnetiteCtrl.awesomeThings.length).toBe(3);
  });
});
