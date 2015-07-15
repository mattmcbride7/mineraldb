'use strict';

describe('Controller: MineralsIlmeniteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsIlmeniteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsIlmeniteCtrl = $controller('MineralsIlmeniteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsIlmeniteCtrl.awesomeThings.length).toBe(3);
  });
});
