(function () {
    'use strict';
    angular.module('app.interceptors', [])
        .factory('HttpInterceptor', HttpInterceptor);

    HttpInterceptor.$inject = ['$q', '$injector'];

    function HttpInterceptor($q, $injector) {
        var HttpInterceptor = {
            responseError: responseError,
            request: request
        };

        return HttpInterceptor;

        function request(config) {
            return config;
        }

        function responseError(rejection) {
            if (rejection.status === 401) {
                return error401(rejection)
            }

            if (rejection.status === 404) {
                return error404(rejection)
            }

            if (rejection.status === 500) {
                return error500(rejection)
            }

            return $q.reject(rejection);
        }

        function error401(rejection) {
            $injector.get('ErrorHandlerFactory').errorHandler(
                {
                    title: 'Atención',
                    template: 'No está autorizado'
                }
            );
            return $q.reject(rejection);
        }

        function error404(rejection) {
            $injector.get('ErrorHandlerFactory').errorHandler(
                {
                    title: 'Atención',
                    template: 'No existe el recurso al que intenta acceder'
                }
            );
            return $q.reject(rejection);
        }

        function error500(rejection) {
            $injector.get('ErrorHandlerFactory').errorHandler(
                {
                    title: 'Atención',
                    template: 'Ha ocurrido un error inesperado'
                }
            );
            return $q.reject(rejection);
        }
    }
})();
