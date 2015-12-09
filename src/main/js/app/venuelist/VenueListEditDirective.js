// directives
angular.module('hungry.directives', [])
.directive('showVenueListDetails', function() {
    return {
        template: 'Id: {{venueList.id}}, Name: {{venueList.name}}'
    };
});
