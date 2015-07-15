'use strict';

describe('Controller: MineralsAzuriteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsAzuriteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsAzuriteCtrl = $controller('MineralsAzuriteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsAzuriteCtrl.awesomeThings.length).toBe(3);
  });
});
