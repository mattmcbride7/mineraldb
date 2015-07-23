'use strict';


angular.module('mineralDbApp')
  .factory('ArrayUtil', function () {
    var unique = function(a) {
        return a.reduce(function(p, c) {
            if (p.indexOf(c) < 0) p.push(c);
            return p;
        }, []);
    };

    // Public API here
    return {
        unique: unique
    };
  });
