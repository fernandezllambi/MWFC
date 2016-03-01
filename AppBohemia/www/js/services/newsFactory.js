/**
 * Created by Rod on 2/29/16.
 */
services.factory('newsFactory', ['$http', '$q', 'constants', function ($http, $q, constants) {
  var news = [];

  var getNews = function () {
    var newsUrl = constants.apiUrl + 'get_news/?totalnews=5&offset=0&key='+constants.key+'&val='+constants.val;
    var data = {
      totalnews: 5,
      offset: 0,
      key: constants.key,
      val: constants.val
    };
    var deferred = $q.defer();
    $http.get(newsUrl).then(function(e){
      deferred.resolve(JSON.parse(e.data));
    }, function(){
      alert('error');
    });

    return deferred.promise;
  };


  return {
    getNews: getNews
  };

}]);

