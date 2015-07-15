'use strict';

describe('Controller: MineralsWolframiteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsWolframiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsWolframiteCtrl = $controller('MineralsWolframiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsWolframiteCtrl.awesomeThings.length).toBe(3);
  });
});
