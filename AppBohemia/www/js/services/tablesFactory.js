/**
 * Created by Rod on 2/29/16.
 */
services.factory('tableFactory', ['$http', '$q', 'constants', function ($http, $q, constants) {
  var getTable = function () {
    var anual = constants.sociosApiUrl + 'DataFactory/Anual';
    var apertura = constants.sociosApiUrl + 'DataFactory/Apertura';
    var intermedio = constants.sociosApiUrl + 'DataFactory/Intermedio';
    var clausura = constants.sociosApiUrl + 'DataFactory/Clausura';
    var descenso = constants.sociosApiUrl + 'DataFactory/Descenso';
    
    //TODO: A eliminar
    // var torneoActual = 'http://mwfc.com.uy/data/xml/es/uruguay/deportes.futbol.uruguay.posiciones.xml';
    // var torneoPrevio = 'http://mwfc.com.uy/data/xml/es/uruguayap2015/deportes.futbol.uruguayap2015.posiciones.xml';

    var deferred = $q.defer();
    $q.all([$http.get(anual), $http.get(apertura), $http.get(intermedio), $http.get(clausura), $http.get(descenso)]).then(function(results){
      var tables = {
        anual: results[0].data,
        apertura: results[1].data,
        intermedio: results[2].data,
        clausura: results[3].data,
        descenso: results[4].data
      };

      deferred.resolve(tables);
    }, function(){
      alert('error');
    });

    return deferred.promise;
  };


  return {
    getTable: getTable
  };

}]);

