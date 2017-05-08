/**
 * Created by Rod on 2/29/16.
 */
services.factory('betFactory', ['$http', '$q', 'constants', 'loginFactory', function ($http, $q, constants, loginFactory) {
  var bet = function(bet){
    var deferred = $q.defer();

    bet.SocioID = loginFactory.get().Id;

    $http.post(constants.sociosApiUrl + 'rewards', bet).then(function(data){
       deferred.resolve(data);
    }, function(data){
      deferred.reject(data.data);
    });

    return deferred.promise;
  };


  return {
    bet: bet
  };

}]);

