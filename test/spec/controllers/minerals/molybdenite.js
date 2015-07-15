'use strict';

describe('Controller: MineralsMolybdeniteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsMolybdeniteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsMolybdeniteCtrl = $controller('MineralsMolybdeniteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsMolybdeniteCtrl.awesomeThings.length).toBe(3);
  });
});
