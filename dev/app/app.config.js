angular.
module('fsmApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

        $routeProvider.
        when('/main', {
            template: '<main-page></main-page>'
        }).
        otherwise('/main');
    }
]);
