'use strict';

describe('Controller: MineralsScheeliteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsScheeliteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsScheeliteCtrl = $controller('MineralsScheeliteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsScheeliteCtrl.awesomeThings.length).toBe(3);
  });
});
