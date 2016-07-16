/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('tablesCtrl', function ($scope, $ionicLoading, tableFactory) {
    $scope.table = {};
    $scope.tabs = [false, true, false];
    $scope.decline = false;

    $ionicLoading.show({
        template: '<ion-spinner></ion-spinner>'
    });

    tableFactory.getTable().then(function (d) {
        $scope.tables = d;
        setTableToShow();
        $ionicLoading.hide();
    }, function () {
        $ionicLoading.hide();
    });

    $scope.setTab = function (index) {
        for (var i = 0; i < 3; i++) {
            $scope.tabs[i] = i == index;
        }
        setTableToShow();
    };

    function setTableToShow() {
        $scope.decline = false;
        if ($scope.tabs[0])
            $scope.table = $scope.tables.year;
        if ($scope.tabs[1])
            $scope.table = $scope.tables.current;
        if ($scope.tabs[2]) {
            if ($scope.tables.previous != null) {
                $scope.table = $scope.tables.previous;
            } else {
                $scope.table = makeDecline();
                $scope.decline = true;
            }

        }
    }

    function makeDecline(){
        var campeonato = {
            posiciones : {
                equipo : []
            }
        };
        for(var i=0; i < $scope.tables.current.posiciones.equipo.length; i++){
            var tempEquipo = $scope.tables.current.posiciones.equipo[i];
            var equipo = {
                _key : tempEquipo._key,
                _orden: tempEquipo._orden,
                nombre: tempEquipo.nombre,
                puntosdescenso: tempEquipo.puntosdescenso,
                jugadosdescenso: tempEquipo.jugadosdescenso
            };
            campeonato.posiciones.equipo.push(equipo);
        }
        campeonato.posiciones.equipo = campeonato.posiciones.equipo.sort(compare);
        return campeonato;
    }

    function compare(a,b) {
        if (parseInt(a.puntosdescenso) > parseInt(b.puntosdescenso))
            return -1;
        else if (parseInt(a.puntosdescenso) < parseInt(b.puntosdescenso))
            return 1;
        else
            return 0;
    }
});
