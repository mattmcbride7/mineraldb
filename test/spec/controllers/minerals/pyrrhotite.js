'use strict';

describe('Controller: MineralsPyrrhotiteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsPyrrhotiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsPyrrhotiteCtrl = $controller('MineralsPyrrhotiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsPyrrhotiteCtrl.awesomeThings.length).toBe(3);
  });
});
