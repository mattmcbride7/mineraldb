'use strict';

describe('Controller: MineralsCinnabarCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsCinnabarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsCinnabarCtrl = $controller('MineralsCinnabarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsCinnabarCtrl.awesomeThings.length).toBe(3);
  });
});
