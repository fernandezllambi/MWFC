/**
 * Created by Rod on 2/29/16.
 */
services.factory('fixtureFactory', ['$http', '$q', function ($http, $q) {
  var getFixture = function () {
    var fixtureUrl = 'http://mwfc.com.uy/data/xml/es/uruguay/deportes.futbol.uruguay.fixture.xml';
    var posiciones = 'http://mwfc.com.uy/data/xml/es/uruguay/deportes.futbol.uruguay.posiciones.xml';

    var deferred = $q.defer();

    $q.all([$http.get(fixtureUrl), $http.get(posiciones)]).then(function(results){
      var x2js = new X2JS();

      var fixture = x2js.xml_str2json(results[0].data).fixture;
      var posiciones = x2js.xml_str2json(results[1].data).posiciones;

      for(f in fixture.fecha){
        var fecha = fixture.fecha[f];
        //SI hay más de una fecha
        if(fecha.partido.length !== undefined){
          for(p in fecha.partido){
            var partido = fecha.partido[p];
            partido.local._img = getImage(partido.local, posiciones.equipo);
            partido.visitante._img = getImage(partido.visitante, posiciones.equipo);
          }
        }else{
          fecha.partido.local._img = getImage(fecha.partido.local, posiciones.equipo);
          fecha.partido.visitante._img = getImage(fecha.partido.visitante, posiciones.equipo);
        }
      }

      deferred.resolve(fixture);
    });

    return deferred.promise;
  };

  function getImage(equipo, equipos){
    for(e in equipos){
      var _equipo = equipos[e];
      if(equipo._id == _equipo._id){
        return _equipo._key;
      }
    }
  }

  return {
    getFixture: getFixture
  };

}]);

