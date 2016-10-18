(function (){
'use strict'

  angular.module('myFirstApp', [])
  .controller('MyFirstController', function($scope){
    $scope.name = "testScope";
    $scope.sayHello = function(){
      return "hello";
    }
