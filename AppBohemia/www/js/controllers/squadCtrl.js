/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('squadCtrl', function ($scope, $ionicLoading, squadFactory) {
  $scope.jugadores = {};

  $scope.parseDate = function (str) {
    return str.substring(6, 8) + '-' + str.substring(4, 6) + '-' + str.substring(0, 4);
  };

  $ionicLoading.show({
    template: '<ion-spinner></ion-spinner>'
  });

  squadFactory.getSquad().then(function (s) {
    $scope.jugadores = s;
    $ionicLoading.hide();
  }, function () {
    $ionicLoading.hide();
  });
});
