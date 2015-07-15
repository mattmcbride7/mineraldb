'use strict';

describe('Controller: MineralsBariteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsBariteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsBariteCtrl = $controller('MineralsBariteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsBariteCtrl.awesomeThings.length).toBe(3);
  });
});
