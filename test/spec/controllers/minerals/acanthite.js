'use strict';

describe('Controller: MineralsAcanthiteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsAcanthiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsAcanthiteCtrl = $controller('MineralsAcanthiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsAcanthiteCtrl.awesomeThings.length).toBe(3);
  });
});
