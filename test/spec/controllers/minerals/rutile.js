'use strict';

describe('Controller: MineralsRutileCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsRutileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsRutileCtrl = $controller('MineralsRutileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsRutileCtrl.awesomeThings.length).toBe(3);
  });
});
