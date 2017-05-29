(function () {
  'use strict';
  angular.module('myFirstApp',[])
  .controller('MyFirstController',function ($scope) {
  $scope.name = "Atreya Rath";

  $scope.sayHello = function () {
    return "hello!";
  };

  });

})();
