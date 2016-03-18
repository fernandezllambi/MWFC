services.factory('loginFactory', ['$http', '$q', 'constants', function ($http, $q, constants) {
  var socio = undefined;
  var login = function (model) {
    var loginUrl = constants.apiUrl + 'loginuser/?username=' + encodeURIComponent(model.mail) + '&password=' + encodeURIComponent(model.password) + '&key=' + constants.key + '&val=' + constants.val;
    var deferred = $q.defer();
    $http.get(loginUrl).then(function (e) {
      var respuesta = JSON.parse(e.data);
      if (respuesta.error == 0) {
        var userDataUrl = 'http://api.mwfc.com.uy.69-16-238-101.plesk.servidorwindows4.com/api/socio?id=' + model.mail;
        $http.get(userDataUrl).then(function (d) {
          deferred.resolve(d.data);
          socio = d.data;
        });
      }else{
        deferred.reject('Usuario y/o contraseña inválida');
      }

    }, function () {
      alert('error');
    });

    return deferred.promise;
  };

  var get = function(){
    return socio;
  };

  return {
    login: login,
    get: get
  };

}]);

