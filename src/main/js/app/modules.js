angular.module('hungryUIApp', [
    'hungry.controllers',
    'ngRoute'
]);

angular.module('hungry.controllers', ['hungry.constants', 'hungry.factories', 'hungry.directives']);

