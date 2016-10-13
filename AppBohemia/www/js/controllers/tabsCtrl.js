/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('tabsCtrl', function ($scope, $rootScope, $state) {
    var toogle = function () {
        var element = document.getElementById("tab-bar");
        var isOn = (' ' + element.className + ' ').indexOf(' open ') > -1;
        var img = document.getElementById('more');
        if (isOn) {
            img.src = "img/menu/more.png";
            element.className = "clearfix";
            unbindClose();
        } else {
            img.src = "img/menu/caret.png";
            element.className = "clearfix open";
            bindClose();
        }

    };

    var bindClose = function bindClose() {
        var view = angular.element(document).find('ion-nav-view');
        view.bind('click', function () {
            toogle();
        });
    };

    var unbindClose = function unbindClose() {
        var view = angular.element(document).find('ion-nav-view');
        view.unbind('click');
    };

    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        setActiveTab(toState);
    });

    var setActiveTab = function (state) {
        if (state.name == "home") {
            $scope.tab = 1;
        }
        else if (state.name == "news") {
            $scope.tab = 2;
        }
        else if (state.name == "tables") {
            $scope.tab = 3;
        }
        else if (state.name == "login") {
            $scope.tab = 4;
        }
        else if (state.name == "squad") {
            $scope.tab = 5;
        }
        else if (state.name == "license") {
            $scope.tab = 6;
        }
        else if (state.name == "fixture") {
            $scope.tab = 7;
        }
        else if (state.name == "social") {
            $scope.tab = 8;
        }
        else if (state.name == "profile") {
            $scope.tab = 4;
        }
        else if (state.name == "rewards") {
            $scope.tab = 9;
        }


    };

    $scope.toogle = toogle;
});
