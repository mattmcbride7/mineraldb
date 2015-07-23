'use strict';

describe('Filter: minerals', function () {

  // load the filter's module
  beforeEach(module('mineralDbApp'));

  // initialize a new instance of the filter before each test
  var minerals;
  beforeEach(inject(function ($filter) {
    minerals = $filter('minerals');
  }));

  it('should return the input prefixed with "minerals filter:"', function () {
    var text = 'angularjs';
    expect(minerals(text)).toBe('minerals filter: ' + text);
  });

});
