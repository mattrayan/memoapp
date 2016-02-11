angular.module('spotifyStore', ['flux'])
.store('store', function() {
    return {
        initialize: function() {
            this.state = this.immutable({
                artists: [],
                albums: [],
                tracks: []
            });
        },

        handlers: {
            'setArtists': 'setArtists',
            'setAlbums': 'setAlbums',
            'setTracks': 'setTracks'
        },

        setArtists: function(artists) {
            this.state.set('artists', artists);
        },

        setAlbums: function(albums) {
            this.state.set('albums', albums);
        },

        setTracks: function(tracks) {
            this.state.set('tracks', tracks);
        },

        exports: {
            get artists() {
                return this.state.get('artists');
            },

            get albums() {
                return this.state.get('albums');
            },

            get tracks() {
                return this.state.get('tracks');
            }
        }
    };
});
