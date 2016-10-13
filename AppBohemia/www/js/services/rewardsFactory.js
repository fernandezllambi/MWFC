/**
 * Created by Rod on 2/29/16.
 */
services.factory('rewardsFactory', ['$http', '$q', 'constants', 'loginFactory', function ($http, $q, constants, loginFactory) {
  var getUserRewards = function () {
    
    var user = loginFactory.get();

    var deferred = $q.defer();

    if(!user){
      deferred.reject();
      return deferred.promise;
    }

    $http.get(constants.sociosApiUrl + 'rewards?ci='+user.Ci).then(function(response){
      deferred.resolve(response.data);
    });

    return deferred.promise;
  };

  var bet = function(bet){
    var deferred = $q.defer();
    var bet = {};
    $http.post(constants.sociosApiUrl + 'bet', bet).then(function(data){
      //var 
    });

    deferred.resolve(data);

    return deferred.promise;
  };


  return {
    getUserRewards: getUserRewards,
    bet: bet
  };

}]);

