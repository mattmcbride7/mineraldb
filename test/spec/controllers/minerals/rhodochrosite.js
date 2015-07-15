'use strict';

describe('Controller: MineralsRhodochrositeCtrl', function () {

  // load the controller's module
  beforeEach(module('mineralDbApp'));

  var MineralsRhodochrositeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MineralsRhodochrositeCtrl = $controller('MineralsRhodochrositeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MineralsRhodochrositeCtrl.awesomeThings.length).toBe(3);
  });
});
