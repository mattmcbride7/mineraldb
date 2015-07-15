'use strict';

describe('Controller: MineralsPyriteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsPyriteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsPyriteCtrl = $controller('MineralsPyriteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsPyriteCtrl.awesomeThings.length).toBe(3);
  });
});
