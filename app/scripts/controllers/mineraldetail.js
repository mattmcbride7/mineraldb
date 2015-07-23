'use strict';


angular.module('mineralDbApp')
  .controller('MineraldetailCtrl', function ($scope, $routeParams, $firebaseObject) {
    if ($routeParams === undefined){
      $scope.mineral = {};
    }
    else {
      var id = $routeParams.mineralId;
      var url = "https://mineraldb.firebaseio.com/minerals/" + id;
      var ref = new Firebase(url);

      var obj = $firebaseObject(ref);

      obj.$loaded().then(function() {
        $scope.mineral = obj;

        console.log("loaded record:", obj.$id, obj.someOtherKeyInData);

       // To iterate the key/value pairs of the object, use angular.forEach()
       angular.forEach(obj, function(value, key) {
          console.log(key, value);
       });
     });
    }
  });
