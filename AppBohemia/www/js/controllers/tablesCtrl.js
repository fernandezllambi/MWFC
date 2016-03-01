/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('tablesCtrl', function ($scope, tableFactory) {
  $scope.table = {};

  tableFactory.getTable().then(function(d){
    $scope.table = d;
  });
});
