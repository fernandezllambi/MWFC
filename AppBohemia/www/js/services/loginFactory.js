services.factory('loginFactory', ['$http', '$q', 'constants', function ($http, $q, constants) {
  var socio = undefined;
  //var socio = {Apellido:"Lezama",Ci:"45080330",Email:"joacoleza@hotmail.com",FechaNacimiento:"22/04/1993",Foto:"http://socios.mwfc.com.uy/fotos/569a65b3-694d-4ee4-a630-da14388afff1.jpg",Id:"e45f9c6b-e9e2-e411-8265-f0761c3b699a",Nombre:"Joaquin",NroSocio:1044846, Premios:null, SegundoApellido:"Muñoz",SegundoNombre:null,TotalPremios:0}
  var login = function (model) {
    var loginUrl = constants.apiUrl + 'loginuser/?username=' + encodeURIComponent(model.mail) + '&password=' + encodeURIComponent(model.password) + '&key=' + constants.key + '&val=' + constants.val;
    var deferred = $q.defer();
    $http.get(loginUrl).then(function (e) {
      var respuesta = JSON.parse(e.data);
      if (respuesta.error == 0) {
        debugger;
        var userDataUrl = 'http://api.mwfc.com.uy/api/socio?ci=' + respuesta.cedula;
        $http.get(userDataUrl).then(function (d) {
          deferred.resolve(d.data);
          socio = d.data;
        });
      } else {
        deferred.reject('Usuario y/o contraseña inválida');
      }
    });

    return deferred.promise;
  };

  var get = function () {
    return socio;
  };

  var logout = function () {
    socio = undefined;
  };

  return {
    login: login,
    get: get,
    logout: logout
  };

}]);

