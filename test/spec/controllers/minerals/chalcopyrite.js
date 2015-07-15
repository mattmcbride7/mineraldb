'use strict';

describe('Controller: MineralsChalcopyriteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsChalcopyriteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsChalcopyriteCtrl = $controller('MineralsChalcopyriteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsChalcopyriteCtrl.awesomeThings.length).toBe(3);
  });
});
