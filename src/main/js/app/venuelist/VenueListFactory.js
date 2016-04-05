// factories
var factoryModule = angular.module('hungry.factories', ['ngResource', 'hungry.constants']);

factoryModule.factory('VenueList', VenueListFactory);

function VenueListFactory($resource, API_PATH) {
    return $resource(API_PATH + '/api/venuelist/:id', {id: '@id'});
}
