'use strict';

/**
 * @ngdoc overview
 * @name trangularApp
 * @description
 * #trangularApp
 *
 * Main module of the application.
 */
angular
  .module('trangularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, send to /
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('/', {
        url:"/",
        templateUrl: '../modules/main/main.html',
        controller: 'mainCtrl'
      })
      .state('about', {
        url:"/about",
        templateUrl: '../modules/about/about.html',
        controller: 'aboutCtrl'
      });
  });
