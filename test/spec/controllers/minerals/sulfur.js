'use strict';

describe('Controller: MineralsSulfurCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsSulfurCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsSulfurCtrl = $controller('MineralsSulfurCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsSulfurCtrl.awesomeThings.length).toBe(3);
  });
});
