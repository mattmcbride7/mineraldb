'use strict';

/**
 * @ngdoc function
 * @name mineralDbApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the mineralDbApp
 */
angular.module('mineralDbApp')
  .controller('AppCtrl', function ($rootScope) {
    $rootScope.userLoggedIn = false;
  });
