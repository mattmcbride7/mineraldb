'use strict';

describe('Controller: MineralsArsenopyriteCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsArsenopyriteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsArsenopyriteCtrl = $controller('MineralsArsenopyriteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsArsenopyriteCtrl.awesomeThings.length).toBe(3);
  });
});
