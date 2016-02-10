angular.module('discovery', ['ngAnimate'])
.controller('discoveryCtrl', ['$scope', 'spotifyAPI', function($scope, spotifyAPI) {
    var self = this;

    this.query = {};
    this.artists = [];
    this.welcome = true;

    this.search = function() {
        spotifyAPI.getArtists(this.query.request).then(function(data) {
            self.artists = data;
            self.welcome = false;
        });
    };

}]);