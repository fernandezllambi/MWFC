/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('newsCtrl', function ($scope, newsFactory) {
  $scope.news = {};

  newsFactory.getNews().then(function(e){
    $scope.news = e;
    debugger;
  });

  $scope.options = {
    loop: false,
    effect: 'fade',
    speed: 500
  };
});
