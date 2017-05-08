controllers.controller('rewardsCtrl', function ($scope, $state, fixtureFactory, loginFactory, rewardsFactory, $ionicModal, betFactory, $cordovaDialogs) {
  $scope.$on("$ionicView.beforeEnter", function (scopes, states) {
    var socio = loginFactory.get();

    $scope.socio = socio;
         
  });

  fixtureFactory.getCurrentNext().then(function (d) {
    $scope.date = d;

  });
 
  rewardsFactory.getUserRewards($scope.socio).then(function (d) {
    $scope.rewards = d;
  });

  $scope.play = function () {
    $ionicModal.fromTemplateUrl('templates/play.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.bet = function(bet) {
    betFactory.bet({
      local : bet.local.$modelValue,
      visitante : bet.visitante.$modelValue,
    }).then(function(){
      $cordovaDialogs.alert('Mucha suerte!', 'Confirmación', 'Ok')
      .then(function() {
        // callback success
        $scope.modal.hide();
      });
      
    }, function(data){
      $cordovaDialogs.alert(data, 'Error', 'Ok')
      .then(function() {
        // callback success
        $scope.modal.hide();
      });
    });    
  };
});
