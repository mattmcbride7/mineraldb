'use strict';

describe('Controller: MineralsSylviteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsSylviteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsSylviteCtrl = $controller('MineralsSylviteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsSylviteCtrl.awesomeThings.length).toBe(3);
  });
});
