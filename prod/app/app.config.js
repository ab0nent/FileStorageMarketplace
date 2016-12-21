angular.
module('fsmApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

        $routeProvider.
        when('/main', {
            template: '<main-page></main-page>'
        }).
        when('/config', {
            template: '<config-page></config-page>'
        }).

        otherwise('/main');
    }
]);
