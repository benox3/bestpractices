'use strict';

/* Controllers */



var bestPracticesControllers = angular.module('bestPracticesControllers', []);



bestPracticesControllers.controller('ngBindHtmlCtrl', ['$scope', '$resource', function ngBindHtmlCtrl($scope, $resource) {



    $scope.data = $resource('practices.js').get(function () {
        $scope.loaded = true;
        $scope.practices = $scope.data.practices;

    });


} ]);

bestPracticesControllers.controller('routController', ['$scope', '$resource', '$routeParams',
  function ($scope, $resource, $routeParams) {
      $scope.data = $resource('practices.js').get(function () {
          $scope.loaded = true;
          $scope.selectedId = $routeParams.practiceId;
          $scope.practices = $scope.data.practices;
          $scope.nextId = parseInt($routeParams.practiceId) + 1;
          $scope.prevId = parseInt($routeParams.practiceId) - 1;
          $scope.prevheader="Previous";
          if ($scope.practices.length <= $scope.nextId) {
              $scope.nextId = 0;
          }
          if ( $scope.prevId < 0 ) {
              $scope.prevheader = 'Home';
          }
    

      });



  } ]);
