/**
 * Created by Rod on 2/18/16.
 */
angular.module('starter.directives', [])
    .directive('hideHeader', function(){
        return {
            restrict: 'A',
            link: function(scope, elem, attr) {
                var header = document.getElementsByTagName('header')[0];
                header.style.display = 'none';
            }
        };
    });