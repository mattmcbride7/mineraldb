'use strict';

describe('Controller: MineralsSmithsoniteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsSmithsoniteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsSmithsoniteCtrl = $controller('MineralsSmithsoniteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsSmithsoniteCtrl.awesomeThings.length).toBe(3);
  });
});
