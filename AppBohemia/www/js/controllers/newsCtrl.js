/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('newsCtrl', function ($scope, $ionicLoading, newsFactory) {
  $scope.news = {};

  $ionicLoading.show({
    template: '<ion-spinner></ion-spinner>'
  });

  newsFactory.getNews().then(function(e){
    $scope.news = e;
    $ionicLoading.hide();
  }, function(){
    $ionicLoading.hide();
  });

  $scope.options = {
    loop: false,
    effect: 'fade',
    speed: 500
  };

  $scope.toASCII = function(str) {
    // this prevents any overhead from creating the object each time
    var element = document.createElement('div');

    if(str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  }
});
