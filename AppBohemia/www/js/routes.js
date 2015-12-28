angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
      })

      .state('app.login', {
        url: '/login',
        views: {
          'side-menu': {
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
          }
        }
      })

      .state('app.fixture', {
        url: '/fixture',
        abstract: true,
        views: {
          'side-menu': {
            templateUrl: 'templates/tabsController.html'
          }
        }
      })

      .state('app.fixture.apertura', {
        url: '/apertura',
        views: {
          'tab1': {
            templateUrl: 'templates/apertura.html',
            controller: 'aperturaCtrl'
          }
        }
      })


      .state('app.fixture.clausura', {
        url: '/clausura',
        views: {
          'tab2': {
            templateUrl: 'templates/clausura.html',
            controller: 'clausuraCtrl'
          }
        }
      })


        .state('app.fixture.anual', {
          url: '/anual',
          views: {
            'tab3': {
              templateUrl: 'templates/anual.html',
              controller: 'anualCtrl'
            }
          }
        })

      .state('app.fixture.descenso', {
        url: '/descenso',
        views: {
          'tab4': {
            templateUrl: 'templates/descenso.html',
            controller: 'descensoCtrl'
          }
        }
      })




      .state('app.inicio', {
        url: '/inicio',
        views: {
          'side-menu': {
            templateUrl: 'templates/inicio.html',
            controller: 'inicioCtrl'
          }
        }
      })


      .state('app.carneDigital', {
        url: '/carneDigital',
        views: {
          'side-menu': {
            templateUrl: 'templates/carneDigital.html',
            controller: 'carneDigitalCtrl'
          }
        }
      })


      .state('app.noticias', {
        url: '/noticias',
        views: {
          'side-menu': {
            templateUrl: 'templates/noticias.html',
            controller: 'noticiasCtrl'
          }
        }
      })


    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/side-menu/inicio');

  });
