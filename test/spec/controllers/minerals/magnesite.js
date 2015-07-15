'use strict';

describe('Controller: MineralsMagnesiteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsMagnesiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsMagnesiteCtrl = $controller('MineralsMagnesiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsMagnesiteCtrl.awesomeThings.length).toBe(3);
  });
});
