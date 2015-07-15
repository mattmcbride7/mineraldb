'use strict';

describe('Controller: MineralsHaliteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsHaliteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsHaliteCtrl = $controller('MineralsHaliteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsHaliteCtrl.awesomeThings.length).toBe(3);
  });
});
