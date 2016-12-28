angular.
module('core.jsonData').
factory('jsonData', ['$resource',
    function($resource) {
        return $resource('json/:name.json', {}, {
            query: {
                method: 'GET',
                params: {name: 'abi'},
                isArray: true
            }
        });
    }
]);