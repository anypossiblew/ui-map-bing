'use strict';

/**
 * @ngdoc function
 * @name uiMapBingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiMapBingApp
 */
angular.module('uiMapBingApp')
  .controller('MainCtrl', function ($scope) {

    $scope.myMarkers = [];

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.mapOptions = {
      // map plugin config
      toolbar: true,
      scrollzoom: true,
      maptype: true,
      overview: true,
      locatecity: true,
      // map-self config
      resizeEnable: true,
      // ui map config
      uiMapCache: true
    };

    $scope.addMarker = function ($event, $params) {

      var e = $params[0];
      if (e.targetType == "map") {
        var point = new Microsoft.Maps.Point(e.getX(), e.getY());
        var loc = e.target.tryPixelToLocation(point);

        var pin = new Microsoft.Maps.Pushpin(loc, {});

        $scope.myMap.entities.push(pin);

        $scope.myMarkers.push(pin);
      }
    };

    $scope.setZoomMessage = function (zoom) {
      $scope.zoomMessage = 'You just zoomed to ' + zoom + '!';
      console.log(zoom, 'zoomed');
    };

    $scope.openMarkerInfo = function (marker) {
      $scope.currentMarker = marker;
      $scope.currentMarkerLat = marker.getLocation().latitude;
      $scope.currentMarkerLng = marker.getLocation().longitude;

      $scope.myInfoWindow.setLocation(marker.getLocation());
      //var options = $scope.myInfoWindow.getOptions();
      //options.visible = true;
      //$scope.myInfoWindow.setOptions(options);
      $scope.myMap.entities.push($scope.myInfoWindow);
      $scope.myInfoWindow.open();
    };

    $scope.setMarkerPosition = function (marker, lat, lng) {
      marker.setPosition(new qq.maps.LatLng(lat, lng));
    };
  });
