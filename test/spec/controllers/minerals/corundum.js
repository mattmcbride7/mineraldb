'use strict';

describe('Controller: MineralsCorundumCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsCorundumCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsCorundumCtrl = $controller('MineralsCorundumCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsCorundumCtrl.awesomeThings.length).toBe(3);
  });
});
