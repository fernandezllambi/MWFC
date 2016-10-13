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

  function getCurrentNext(){
    var deferred = $q.defer();

    getFixture().then(function(data){
      for(var f in data.fecha){
        if(data.fecha[f]._estado == 'proxima' ){
          //Si hay una sola fecha Ej. final de campeonato
          if (data.fecha[f].partido.length === undefined) {
              if (data.fecha[f].partido.local._id == "200" || data.fecha[f].partido.visitante._id == "200") {
                  deferred.resolve(data.fecha[f].partido);
              }else{
                  return null;
              }
          } else {
              for (p in data.fecha[f].partido) {
                  var partido = data.fecha[f].partido[p];
                  if (partido.local._id == "200" || partido.visitante._id == "200") {
                      deferred.resolve(partido);
                  }
              }
          }
          
        }
      }
    });

    return deferred.promise;
  }

  return {
    getFixture: getFixture,
    getCurrentNext : getCurrentNext
  };

}]);

