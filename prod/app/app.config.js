angular.
module('fsmApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.
        when('/main', {
            template: '<main-page></main-page>'
        }).
        when('/contract', {
            template: '<contract-page></contract-page>'
        }).
        when('/accounts', {
            template: '<accounts-page></accounts-page>'
        }).
        otherwise('/main');
    }
]);
