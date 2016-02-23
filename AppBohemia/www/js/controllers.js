angular.module('app.controllers', [])

  .controller('tabsCtrl', function ($scope) {

    $scope.toogle = function () {
      var element = document.getElementById("tab-bar");
      var isOn = (' ' + element.className + ' ').indexOf(' open ') > -1;

      if (isOn) {
        element.className = "clearfix";
      } else {
        element.className = "clearfix open";
      }

    }
  })
  .controller('homeCtrl', function ($scope) {

  })

  .controller('newsCtrl', function ($scope) {

  })

  .controller('tablesCtrl', function ($scope) {

  })

  .controller('loginCtrl', function ($scope, $state) {
    $scope.$on("$ionicView.beforeLeave", function (scopes, states) {
      var header = document.getElementsByTagName('header')[0];
      header.style.display = 'block';
    });

    $scope.$on("$ionicView.beforeEnter", function (scopes, states) {
      var header = document.getElementsByTagName('header')[0];
      header.style.display = 'none';
    });

    $scope.close = function () {
      $state.go("home");
    };

  })

  .controller('licenseCtrl', function ($scope) {

  })

  .controller('squadCtrl', function ($scope) {

  })

  .controller('fixtureCtrl', function ($scope) {

  });
