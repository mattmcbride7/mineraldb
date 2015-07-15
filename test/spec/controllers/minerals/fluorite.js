'use strict';

describe('Controller: MineralsFluoriteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsFluoriteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsFluoriteCtrl = $controller('MineralsFluoriteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsFluoriteCtrl.awesomeThings.length).toBe(3);
  });
});
