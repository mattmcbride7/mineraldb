'use strict';

describe('Service: ArrayUtil', function () {

  // load the service's module
  beforeEach(module('mineralDbApp'));

  // instantiate service
  var ArrayUtil;
  beforeEach(inject(function (_ArrayUtil_) {
    ArrayUtil = _ArrayUtil_;
  }));

  it('should do something', function () {
    expect(!!ArrayUtil).toBe(true);
  });

});
