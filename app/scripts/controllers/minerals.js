'use strict';

angular.module('mineralDbApp')
  .controller('MineralsCtrl', function ($scope, $firebaseArray) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.minerals = [];
    var mineralRef = new Firebase("https://mineraldb.firebaseio.com").child("minerals");
    var mineralsList = $firebaseArray(mineralRef);
    mineralsList.$loaded().then(function(data) {
      $scope.minerals = data;
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
