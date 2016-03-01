/**
 * Created by Rod on 2/29/16.
 */
services.factory('tableFactory', ['$http', '$q', function ($http, $q) {
  var getTable = function () {
    var newsUrl = 'http://mwfc.com.uy/data/xml/es/uruguay/deportes.futbol.uruguay.posiciones.xml';

    var deferred = $q.defer();
    $http.get(newsUrl).then(function(e){
      var x2js = new X2JS();
      deferred.resolve(x2js.xml_str2json(e.data));
    }, function(){
      alert('error');
    });

    return deferred.promise;
  };


  return {
    getTable: getTable
  };

}]);

