/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('loginCtrl', function ($scope, $state, loginFactory, $ionicLoading, $ionicPopup) {
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

  $scope.submit = function (login) {
    $ionicLoading.show({
      template: '<ion-spinner></ion-spinner>'
    });
    var model = {};
    model.mail = login.mail.$modelValue;
    model.password = login.password.$modelValue;
    loginFactory.login(model).then(function(d){
      if(d.error == 2){
        var alertPopup = $ionicPopup.alert({
          title: 'Atención',
          cssClass: 'popup-alert',
          template: d.msj,
          okText: 'Aceptar', // String (default: 'OK'). The text of the OK button.
          okType: 'button-dark'
        });
      }
      $ionicLoading.hide();
    });
  }

});
