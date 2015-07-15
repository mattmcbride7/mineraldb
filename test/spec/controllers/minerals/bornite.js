'use strict';

describe('Controller: MineralsBorniteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsBorniteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsBorniteCtrl = $controller('MineralsBorniteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsBorniteCtrl.awesomeThings.length).toBe(3);
  });
});
