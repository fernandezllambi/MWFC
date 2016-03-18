/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('licenseCtrl', function ($scope, $state, loginFactory) {
  $scope.$on("$ionicView.beforeEnter", function (scopes, states) {
    var socio = loginFactory.get();
    if (!socio) {
      $state.go('login');
    }else{
      $scope.socio = socio;
    }
  });
});
