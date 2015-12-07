angular.module('hungryUIApp', [])
    .controller('VenueListController', function () {
        var ctrl = this;
        ctrl.venueLists = [
            {id: 1, name: 'Cool Berlin List'},
            {id: 2, name: 'Vienna Hipster Places List'}];

        ctrl.addNewVenueList = function () {
            ctrl.venueLists.push(ctrl.newVenueList);
            ctrl.newVenueList = {};
        };
    });