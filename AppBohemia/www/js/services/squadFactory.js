/**
 * Created by Rod on 2/29/16.
 */
services.factory('squadFactory', ['$http', '$q', 'constants', function ($http, $q, constants) {

  var getSquad = function () {
    var newsUrl = constants.apiUrl + 'get_team/?key='+constants.key+'&val='+constants.val;
    var deferred = $q.defer();
    $http.get(newsUrl).then(function(e){
      var jugadores = JSON.parse(e.data).jugadores;

      for(i in jugadores.Arquero){
        jugadores.Arquero[i].img = atob(jugadores.Arquero[i].img_ampliada);
      }

      for(i in jugadores.Defensa){
        jugadores.Defensa[i].img = atob(jugadores.Defensa[i].img_ampliada);
      }

      for(i in jugadores.Delantero){
        jugadores.Delantero[i].img = atob(jugadores.Delantero[i].img_ampliada);
      }
      deferred.resolve(jugadores);

    }, function(){
      alert('error');
    });

    return deferred.promise;
  };


  return {
    getSquad: getSquad
  };

}]);

