/**
 * Created by Rod on 2/27/16.
 */
controllers.controller('tabsCtrl', function ($scope) {

  $scope.toogle = function () {
    var element = document.getElementById("tab-bar");
    var isOn = (' ' + element.className + ' ').indexOf(' open ') > -1;

    if (isOn) {
      element.className = "clearfix";
    } else {
      element.className = "clearfix open";
    }

  }
});
