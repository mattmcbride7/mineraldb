'use strict';

describe('Controller: MineralsRealgarCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsRealgarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsRealgarCtrl = $controller('MineralsRealgarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsRealgarCtrl.awesomeThings.length).toBe(3);
  });
});
