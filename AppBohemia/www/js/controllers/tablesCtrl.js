/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('tablesCtrl', function ($scope, $ionicLoading, tableFactory) {
  $scope.table = {};

  $ionicLoading.show({
    template: '<ion-spinner></ion-spinner>'
  });

  tableFactory.getTable().then(function(d){
    $scope.table = d;
    $ionicLoading.hide();
  }, function(){
    $ionicLoading.hide();
  });
});
