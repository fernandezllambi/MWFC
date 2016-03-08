/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('tabsCtrl', function ($scope) {
  var toogle = function () {
    var element = document.getElementById("tab-bar");
    var isOn = (' ' + element.className + ' ').indexOf(' open ') > -1;

    if (isOn) {
      element.className = "clearfix";
      unbindClose();
    } else {
      element.className = "clearfix open";
      bindClose();
    }

  };

  var bindClose = function bindClose (){
    var view = angular.element(document).find('ion-nav-view');
    view.bind('click', function(){
      toogle();
    });
  };

  var unbindClose = function unbindClose (){
    var view = angular.element(document).find('ion-nav-view');
    view.unbind('click');
  };

  $scope.toogle = toogle;
});
