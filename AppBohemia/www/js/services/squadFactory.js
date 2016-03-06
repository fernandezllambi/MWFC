/**
 * Created by Rod on 2/29/16.
 */
services.factory('squadFactory', ['$http', '$q', 'constants', function ($http, $q, constants) {

  var getSquad = function () {
    var newsUrl = constants.apiUrl + 'get_team/?key='+constants.key+'&val='+constants.val;
    var deferred = $q.defer();
    $http.get(newsUrl).then(function(e){
      deferred.resolve(JSON.parse(e.data));
    }, function(){
      alert('error');
    });

    return deferred.promise;
  };


  return {
    getSquad: getSquad
  };

}]);

