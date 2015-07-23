'use strict';

describe('Controller: MineraldetailCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineraldetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineraldetailCtrl = $controller('MineraldetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineraldetailCtrl.awesomeThings.length).toBe(3);
  });
});
