angular.module('discovery', ['ngAnimate'])
.controller('discoveryCtrl', ['$scope', 'spotifyAPI', 'actions', 'store', function($scope, spotifyAPI, actions, store) {
    var self = this;

    this.query = {};
    this.artists = [];
    this.albums = [];
    this.tracks = [];
    this.welcome = true;

    $scope.$listenTo(store, ['artists'], function() {
        self.artists = store.artists;
    });

    $scope.$listenTo(store, ['albums'], function() {
        self.albums = store.albums;
    });

    $scope.$listenTo(store, ['tracks'], function() {
        self.tracks = store.tracks;
    });

    this.search = function() {
        this.welcome = false;

        actions.getArtists(this.query.request);
        actions.getAlbums(this.query.request);
        actions.getTracks(this.query.request);
    };

}]);