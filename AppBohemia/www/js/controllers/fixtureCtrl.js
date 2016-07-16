/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('fixtureCtrl', function ($scope, $ionicLoading, fixtureFactory) {
    $scope.fixture = {};

    $ionicLoading.show({
        template: '<ion-spinner></ion-spinner>'
    });

    fixtureFactory.getFixture().then(function (d) {
        $scope.fixture = d;
        $ionicLoading.hide();
    }, function () {
        $ionicLoading.hide();
    });

    $scope.getPartido = function (partidos) {
        //Si hay una sola fecha Ej. final de campeonato
        if (partidos.length === undefined) {
            if (partidos.local._id == "200" || partidos.visitante._id == "200") {
                return partidos;
            }else{
                return null;
            }
        } else {
            for (p in partidos) {
                var partido = partidos[p];
                if (partido.local._id == "200" || partido.visitante._id == "200") {
                    return partido;
                }
            }
        }
    };

    $scope.parseDate = function (str) {
        return str.substring(6, 8) + '-' + str.substring(4, 6) + '-' + str.substring(0, 4);
    };

});
