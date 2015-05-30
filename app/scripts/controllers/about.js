'use strict';

/**
 * @ngdoc function
 * @name trangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trangularApp
 */
angular.module('trangularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
