'use strict';

describe('Controller: MineralsSphaleriteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsSphaleriteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsSphaleriteCtrl = $controller('MineralsSphaleriteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsSphaleriteCtrl.awesomeThings.length).toBe(3);
  });
});
