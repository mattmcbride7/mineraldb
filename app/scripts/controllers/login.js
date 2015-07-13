'use strict';

/**
 * @ngdoc function
 * @name mineralDbApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the mineralDbApp
 */

angular.module('mineralDbApp')
  .controller('LoginCtrl', function($scope, $firebaseAuth, $rootScope) {
    $scope.loginInfo = {
      email: "",
      password: ""
    };

    var ref = new Firebase("https://mineraldb.firebaseio.com");
    $scope.authObj = $firebaseAuth(ref);

    $scope.authenticateUser = function(){
      $scope.authObj.$authWithPassword($scope.loginInfo)
        .then(function(authData) {
          $rootScope.userLoggedIn = true;
          resetLoginInfo();
          console.log("Logged in as:", authData.uid);
        }).catch(function(error) {
          console.error("Authentication failed:", error);
        });
    };
    $scope.signOut = function(){
      $scope.authObj.$unauth();
      $rootScope.userLoggedIn = false;
    };

    function resetLoginInfo() {
      $scope.loginInfo = {
        email: '',
        password: ''
      };
    }


  });
