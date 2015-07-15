'use strict';

describe('Controller: MineralsGoldCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsGoldCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsGoldCtrl = $controller('MineralsGoldCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsGoldCtrl.awesomeThings.length).toBe(3);
  });
});
