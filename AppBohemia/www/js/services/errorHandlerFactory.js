services.factory('ErrorHandlerFactory', ['$ionicLoading', '$ionicPopup', function ($ionicLoading, $ionicPopup) {
  var errorHandler = function (alertMessage) {
    $ionicLoading.hide();
    $ionicPopup.alert(alertMessage);
  };

  return {
    errorHandler: errorHandler
  };

}]);

