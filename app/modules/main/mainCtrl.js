'use strict';

/**
 * @ngdoc function
 * @name trangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trangularApp
 */
angular.module('trangularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
