/**
 * Created by Rod on 2/29/16.
 */
services.factory('tableFactory', ['$http', '$q', function ($http, $q) {
  var getTable = function () {
    var torneoActual = 'http://mwfc.com.uy/data/xml/es/uruguay/deportes.futbol.uruguay.posiciones.xml';
    var anual = 'http://mwfc.com.uy/data/xml/es/uruguay/deportes.futbol.uruguay.posiciones-reclasificacion.xml';
    var torneoPrevio = 'http://mwfc.com.uy/data/xml/es/uruguayap2015/deportes.futbol.uruguayap2015.posiciones.xml';

    var deferred = $q.defer();
    $q.all([$http.get(torneoActual), $http.get(anual)]).then(function(results){
      var x2js = new X2JS();
      var tables = {
        current : x2js.xml_str2json(results[0].data),
        year: x2js.xml_str2json(results[1].data)
      };

      //Calculo de torneo corto previo
      if(tables.current.posiciones.campeonatoNombreAlternativo.__text.includes("Clausura")){
        tables.current.name = "Clausura";

        var date = new Date();
        var currentYear = date.getFullYear()-1;
        torneoPrevio = 'http://mwfc.com.uy/data/xml/es/uruguayap'+currentYear+'/deportes.futbol.uruguayap'+currentYear+'.posiciones.xml';
        $http.get(torneoPrevio).then(function(data){
          tables.previous = x2js.xml_str2json(data.data);
          tables.previous.name = "Apertura";
          deferred.resolve(tables);
        });
      }else{
        tables.current.name = "Apertura";
        deferred.resolve(tables);
      }
    }, function(){
      alert('error');
    });

    return deferred.promise;
  };


  return {
    getTable: getTable
  };

}]);

