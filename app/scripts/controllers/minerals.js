'use strict';

angular.module('mineralDbApp')
  .controller('MineralsCtrl', function ($scope, $firebaseArray, ArrayUtil) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.loaded = false;
    $scope.minerals = [];
    $scope.hardnessOptions = [];
    $scope.gravityOptions = [];
    $scope.lusterOptions = [];
    $scope.groupOptions = [];
    var mineralRef = new Firebase("https://mineraldb.firebaseio.com").child("minerals");
    var mineralsList = $firebaseArray(mineralRef);
    mineralsList.$loaded().then(function(data) {
      $scope.minerals = data;

      var hardnessOptions = [];
      var gravityOptions = [];
      var lusterOptions = [];
      var groupOptions = [];

      var len = $scope.minerals.length;
      for (var i=0; i<len; i++) {
        hardnessOptions.push(parseFloat($scope.minerals[i].hardness));
        gravityOptions.push(parseFloat($scope.minerals[i].gravity));
        lusterOptions.push($scope.minerals[i].luster);
        groupOptions.push($scope.minerals[i].group);
      }

      $scope.hardnessOptions = ArrayUtil.unique(hardnessOptions).sort();
      $scope.gravityOptions = ArrayUtil.unique(gravityOptions).sort();
      $scope.lusterOptions = ArrayUtil.unique(lusterOptions).sort();
      $scope.groupOptions = ArrayUtil.unique(groupOptions).sort();

      $scope.loaded = true;

    });

    $scope.doSort = function(propName) {
      if ($scope.sortBy === propName) {
        $scope.reverse = !$scope.reverse;
      }
      else {
        $scope.sortBy = propName;
        $scope.reverse = false;
      }
    };

    $scope.addMineral = addMineral;


    function resetMineral() {
        $scope.newMineral = {
            "name": '',
            "hardness": '',
            "group": '',
            "luster": '',
            "gravity": ''
        };
    }
    resetMineral();
    function addMineral() {
        console.log("Inside Add Mineral");
        mineralsList.$add($scope.newMineral);
        resetMineral();
    }
  });
