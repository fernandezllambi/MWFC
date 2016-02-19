angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })

    .controller('ChatsCtrl', function ($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    })

    .controller('TabsCtrl', function ($scope) {
        $scope.toogle = function(){
            var element = document.getElementById("tab-bar");
            var isOn = (' ' + element.className + ' ').indexOf(' open ') > -1;

            if(isOn){
                element.className = "clearfix";
            }else{
                element.className = "clearfix open";
            }
            //$('#tab-bar').toggleClass('open');
        };
    })
    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    })

    .controller('AccountCtrl', function ($scope, $state) {
        $scope.$on("$ionicView.leave", function (scopes, states) {
            var header = document.getElementsByTagName('header')[0];
            header.style.display = 'block';
        });

        $scope.$on("$ionicView.enter", function (scopes, states) {
            var header = document.getElementsByTagName('header')[0];
            header.style.display = 'none';
        });

        $scope.close = function () {
            $state.go("tab.dash");
        };
    });
