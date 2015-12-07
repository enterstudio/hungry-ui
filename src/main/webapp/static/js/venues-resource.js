angular.module('hungryUIApp', ['hungry.controllers']);

// controllers
function VenueListController(VenueList) {
    this.venueLists = VenueList.query();

    this.newVenueList = new VenueList();

    this.addNewVenueList = function () {
        this.newVenueList.$save(function (ret) {
            this.venueLists.push(ret);
            this.newVenueList = new VenueList();
        }.bind(this), function (err) {
            console.log("---err ", err);
        });

    };
}

function UserController() {
    // TODO
}

angular.module('hungry.controllers', ['hungry.constants', 'hungry.factories']);

angular.module('hungry.controllers').controller('VenueListController', VenueListController);
angular.module('hungry.controllers').controller('UserController', UserController);


// constants
angular.module('hungry.constants', [])
    .constant('PATH', 'http://localhost:8080/hungry-rest');


// factories
var factoryModule = angular.module('hungry.factories', ['ngResource', 'hungry.constants']);

factoryModule.factory('VenueList', VenueListFactory);

function VenueListFactory($resource, PATH) {
    return $resource(PATH + '/api/venuelists');
}

