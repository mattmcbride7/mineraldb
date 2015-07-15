'use strict';

describe('Controller: MineralsQuartzCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsQuartzCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsQuartzCtrl = $controller('MineralsQuartzCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsQuartzCtrl.awesomeThings.length).toBe(3);
  });
});
