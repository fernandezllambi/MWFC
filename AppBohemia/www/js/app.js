angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'app.constants', 'monospaced.qrcode'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
      StatusBar.overlaysWebView(false);
    }
  });
});
