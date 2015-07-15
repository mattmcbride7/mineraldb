'use strict';

describe('Controller: MineralsGypsumCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsGypsumCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsGypsumCtrl = $controller('MineralsGypsumCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsGypsumCtrl.awesomeThings.length).toBe(3);
  });
});
