'use strict';

describe('Controller: MineralsDolomiteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsDolomiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsDolomiteCtrl = $controller('MineralsDolomiteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsDolomiteCtrl.awesomeThings.length).toBe(3);
  });
});
