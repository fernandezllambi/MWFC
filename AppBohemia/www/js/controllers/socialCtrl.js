controllers.controller('socialCtrl', function ($scope, $ionicPlatform, $twitterApi, $cordovaOauth, $ionicLoading) {

  $ionicLoading.show({
    template: '<ion-spinner></ion-spinner>'
  });

  var twitterKey = "STORAGE.TWITTER.KEY";
  var clientId = 'gZtRQlHWWAY0DQW3Jgntw0cUs';
  var clientSecret = 'ROz9kKbHXnjfKSFA2DOtyS1je9SP6osSyDbQxFw1VpZwtl7HCY';
  var myToken = '';

  myToken = JSON.parse(window.localStorage.getItem(twitterKey));

  $scope.socialToogle = [false, true]; //Pensado para ver Twitter o Facebook
  $scope.error = false;

  // Load your home timeline
  $scope.showHomeTimeline = function () {
    $twitterApi.getUserTimeline({ screen_name: 'mwfc_oficial', count: 10 })
      .then(function (data) {
        $scope.home_timeline = data;
      })
      .finally(function () {
        $ionicLoading.hide();
      });
  };

  // Automatically start the OAuth dialog if no token was found
  $ionicPlatform.ready(doTwitterSignIn);

  function doTwitterSignIn(){
    myToken = JSON.parse(window.localStorage.getItem(twitterKey));
    if (myToken === '' || myToken === null) {
      $cordovaOauth.twitter(clientId, clientSecret)
        .then(function (succ) {
          myToken = succ;
          window.localStorage.setItem(twitterKey, JSON.stringify(succ));
          $twitterApi.configure(clientId, clientSecret, succ);
          $scope.showHomeTimeline();
          $scope.error = false;
        }, function (error) {
          $scope.error = true;
          $scope.errorMessage = error == "The sign in flow was canceled" ? "Es necesario que inicies sesión en Twitter para poder ver el feed del club" : "Ha ocurrido un error";
          $ionicLoading.hide();
        });
    } else {
      $twitterApi.configure(clientId, clientSecret, myToken);
      $scope.showHomeTimeline();
    }
  }
  
  $scope.reLogin = doTwitterSignIn;

  // Pull-to-refresh
  $scope.doRefresh = function () {
    $scope.showHomeTimeline();
    $scope.$broadcast('scroll.refreshComplete');
  };
  $scope.correctTimestring = function (string) {
    return new Date(Date.parse(string));
  };
});
