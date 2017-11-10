/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('homeCtrl', function ($scope, $ionicLoading, $q, $cordovaInAppBrowser, newsFactory, fixtureFactory) {
  $scope.news = {};
  $scope.fechas = {};

  $ionicLoading.show({
    template: '<ion-spinner></ion-spinner>'
  });

  $q.all([newsFactory.getNews(), fixtureFactory.getFixture()]).then(function (results) {
    $ionicLoading.hide();
    $scope.news = results[0];
    $scope.fechas = results[1].fecha;

    for (f in $scope.fechas) {
      var fecha = $scope.fechas[f];
      if (fecha._estado == 'actual') {
        if (fecha.partido.length === undefined) {
          $scope.fecha = {
            nombre: fecha._nombre,
            local: fecha.partido.local,
            visitante: fecha.partido.visitante,
            goleslocal: fecha.partido.goleslocal,
            golesvisitante: fecha.partido.golesvisitante,
            nombreEstadio: fecha.partido._nombreEstadio,
            fecha:parseDate(fecha._fecha)
          };
          break;
        }
        for (p in fecha.partido) {
          var partido = fecha.partido[p];
          if (partido.local._id == "200" || partido.visitante._id == "200") {
            $scope.fecha = {
              nombre: fecha._nombre,
              local: partido.local,
              visitante: partido.visitante,
              goleslocal: partido.goleslocal,
              golesvisitante: partido.golesvisitante,
              nombreEstadio: partido._nombreEstadio,
              fecha:parseDate(fecha._fecha)
            };
            break;
          }
        }
        break;
      }

    }
  }, function () {
    $ionicLoading.hide();
  });

  $scope.options = {
    loop: false,
    effect: 'fade',
    speed: 500
  };

  $scope.toASCII = function (str) {
    // this prevents any overhead from creating the object each time
    var element = document.createElement('div');

    if (str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  };

  $scope.newsClick = newsClick;

  function parseDate (str) {
    return str.substring(6, 8) + '/' + str.substring(4, 6);
  };

  function newsClick(news){
    $cordovaInAppBrowser.open(news.link, '_system');
  }

});

