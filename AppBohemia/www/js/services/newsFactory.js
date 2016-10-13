/**
 * Created by Rod on 2/29/16.
 */
services.factory('newsFactory', ['$http', '$q', 'constants', function ($http, $q, constants) {
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
      var x2js = new X2JS();
      var news = JSON.parse(e.data).noticias.slice(1);

      for(n in news){
        if(atob(news[n].img)){
          news[n].img = x2js.xml_str2json(atob(news[n].img)).img._src;
        }else{
          news[n].img = "img/top-menu-brand.png";
        }        
      }

      deferred.resolve(news);
    }, function(){
      alert('error');
    });

    return deferred.promise;
  };


  return {
    getNews: getNews
  };

}]);

