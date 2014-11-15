'use strict';

/**
 * @ngdoc overview
 * @name uiMapBingApp
 * @description
 * # uiMapBingApp
 *
 * Main module of the application.
 */
angular
  .module('uiMapBingApp', [
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ui.map'
  ])
  .config(function ($routeProvider, uiMapLoadParamsProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    uiMapLoadParamsProvider.setParams({
      v: '7.0',
      key:'AhgYefMukpWZ3Y3MDp_oUztLbpDSGFkiqAgiKD7KNCurMLR2rDmwi9bM8N405mNX'// your map's develop key
    });
  });
