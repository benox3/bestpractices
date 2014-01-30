'use strict';

/* App Module */


var bestPracticesApp = angular.module('bestPracticesApp', [
  'ngRoute',
  'bestPracticesControllers',
   'ngSanitize',
   'ngAnimate',
   'ui.bootstrap',
   'ngResource'
]);


bestPracticesApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/home', {
          templateUrl: 'partials/home.html',
          controller: 'ngBindHtmlCtrl'
      }).
      when('/:practiceId', {
          templateUrl: 'partials/practice.html',
          controller: 'routController'
      }).
      otherwise({
          redirectTo: '/home'
      });
  } ]);