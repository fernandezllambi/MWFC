/**
 * Created by Rod on 3/5/16.
 */
/**
 * Created by Rod on 2/29/16.
 */
services.factory('loginFactory', ['$http', '$q', 'constants', function ($http, $q, constants) {
  var login = function (model) {
    var loginUrl = constants.apiUrl + 'loginuser/?username='+encodeURIComponent(model.mail)+'&password='+encodeURIComponent(model.password)+'&key='+constants.key+'&val='+constants.val;
    var deferred = $q.defer();
    $http.get(loginUrl).then(function(e){
      deferred.resolve(JSON.parse(e.data));
    }, function(){
      alert('error');
    });

    return deferred.promise;
  };


  return {
    login: login
  };

}]);

