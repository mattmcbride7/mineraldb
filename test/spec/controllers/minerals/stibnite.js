'use strict';

describe('Controller: MineralsStibniteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsStibniteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsStibniteCtrl = $controller('MineralsStibniteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsStibniteCtrl.awesomeThings.length).toBe(3);
  });
});
