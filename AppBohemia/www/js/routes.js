angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

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

      //Lo comento para manter el original y que cuando se agregue los vagapuntos se vuelva a agregar
      // .state('profile', {
      //   url: '/profile',
      //   templateUrl: 'templates/profile.html',
      //   controller: 'profileCtrl',
      //   params: {socio: null}
      // })

      .state('profile', {
        url: '/profile',
        templateUrl: 'templates/license.html',
        controller: 'licenseCtrl',
        params: {socio: null}
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

      // .state('license', {
      //   url: '/license',
      //   templateUrl: 'templates/license.html',
      //   controller: 'licenseCtrl'
      // })
      .state('squad', {
        url: '/squad',
        templateUrl: 'templates/squad.html',
        controller: 'squadCtrl'
      })
      .state('squadDetail', {
        url: '/detail',
        templateUrl: 'templates/squadDetail.html',
        controller: 'squadDetailCtrl',
        params: {jugador: null}
      })
      .state('fixture', {
        url: '/fixture',
        templateUrl: 'templates/fixture.html',
        controller: 'fixtureCtrl'
      })
      .state('social', {
        url: '/social',
        templateUrl: 'templates/social.html',
        controller: 'socialCtrl'
      })
      .state('rewards', {
        url: '/rewards',
        templateUrl: 'templates/rewards.html',
        controller: 'rewardsCtrl'
      });;

    $urlRouterProvider.otherwise('home')
    $httpProvider.interceptors.push('HttpInterceptor');
  });
