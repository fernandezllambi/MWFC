angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('tabsController', {
      url: '/page6',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('tabsController.apertura', {
      url: '/apertura',
      views: {
        'tab7': {
          templateUrl: 'templates/apertura.html',
          controller: 'aperturaCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.clausura', {
      url: '/clausura',
      views: {
        'tab8': {
          templateUrl: 'templates/clausura.html',
          controller: 'clausuraCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.descenso', {
      url: '/descenso',
      views: {
        'tab10': {
          templateUrl: 'templates/descenso.html',
          controller: 'descensoCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.anual', {
      url: '/anual',
      views: {
        'tab9': {
          templateUrl: 'templates/anual.html',
          controller: 'anualCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.login', {
      url: '/login',
      views: {
        'side-menu21': {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        }
      }
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.inicio', {
      url: '/inicio',
      views: {
        'side-menu21': {
          templateUrl: 'templates/inicio.html',
          controller: 'inicioCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.carnéDigital', {
      url: '/carneDigital',
      views: {
        'side-menu21': {
          templateUrl: 'templates/carnéDigital.html',
          controller: 'carnéDigitalCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.noticias', {
      url: '/noticias',
      views: {
        'side-menu21': {
          templateUrl: 'templates/noticias.html',
          controller: 'noticiasCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu/inicio');

});