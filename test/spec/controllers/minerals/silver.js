'use strict';

describe('Controller: MineralsSilverCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsSilverCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsSilverCtrl = $controller('MineralsSilverCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsSilverCtrl.awesomeThings.length).toBe(3);
  });
});
