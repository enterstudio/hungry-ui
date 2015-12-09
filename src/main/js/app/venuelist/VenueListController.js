// controllers
function VenueListController(VenueList) {
    this.venueLists = VenueList.query();

    this.newVenueList = new VenueList();

    this.addNewVenueList = function () {
        this.newVenueList.$save(function (ret) {
            this.venueLists.push(ret);
            this.newVenueList = new VenueList();
        }.bind(this), function (err) {
            console.log("err ", err);
        });
    };

    this.deleteVenueList = function (venueList) {
        venueList.$delete().then(function () {
            var index = _.findIndex(this.venueLists, venueList);
            this.venueLists.splice(index, 1);
        }.bind(this));
    }
}

angular.module('hungry.controllers')
    .controller('VenueListController', VenueListController);

