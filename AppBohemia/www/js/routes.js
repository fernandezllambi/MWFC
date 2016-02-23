angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider


            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            })

            .state('news', {
                url: '/news',
                templateUrl: 'templates/news.html',
                controller: 'newsCtrl'
            })

            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html',
                controller: 'tablesCtrl'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })

            .state('license', {
                url: '/license',
                templateUrl: 'templates/license.html',
                controller: 'licenseCtrl'
            })
            .state('squad', {
                url: '/squad',
                templateUrl: 'templates/squad.html',
                controller: 'squadCtrl'
            })

            .state('fixture', {
                url: '/fixture',
                templateUrl: 'templates/fixture.html',
                controller: 'fixtureCtrl'
            })

        $urlRouterProvider.otherwise('/home')


    });
