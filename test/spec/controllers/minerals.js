'use strict';

describe('Controller: MineralsCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsCtrl = $controller('MineralsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsCtrl.awesomeThings.length).toBe(3);
  });
});
