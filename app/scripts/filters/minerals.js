'use strict';

angular.module('mineralDbApp')
  .filter('minerals', function () {
    return function (input) {
      return 'minerals filter: ' + input;
    };
  });
