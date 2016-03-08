/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('squadDetailCtrl', function ($scope, $ionicLoading, $stateParams) {
  $scope.jugador = $stateParams.jugador;

  $scope.parseDate = function(str){
    return str.substring(6,8) + '-'+str.substring(4,6) + '-'+ str.substring(0,4);
  };
});
