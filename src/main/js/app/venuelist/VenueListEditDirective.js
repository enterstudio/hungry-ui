// directives
angular.module('hungry.directives', [])
.directive('venueListDetails', function() {
    return {
        template: 'Id: {{venueList.id}}, Name: {{venueList.name}}'
    };
});
