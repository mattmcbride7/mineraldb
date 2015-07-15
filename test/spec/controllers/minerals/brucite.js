'use strict';

describe('Controller: MineralsBruciteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsBruciteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsBruciteCtrl = $controller('MineralsBruciteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsBruciteCtrl.awesomeThings.length).toBe(3);
  });
});
