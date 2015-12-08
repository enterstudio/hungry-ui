function Routes($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'main.html'
    });

    $routeProvider.when('/venuelists', {
        templateUrl: 'venuelist/venueLists.html',
        controller: 'VenueListController as ctrl'
    });

    $routeProvider.when('/users', {
        templateUrl: 'user/userList.html',
        controller: 'UserController as ctrl'
    });
}

angular.module('hungryUIApp').config(['$routeProvider', Routes]);

