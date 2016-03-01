/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('loginCtrl', function ($scope, $state) {
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
