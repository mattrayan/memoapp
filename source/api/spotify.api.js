angular.module('spotifyService', [])
.factory('spotifyAPI', ['$http', '$q', function($http, $q) {
    // Spotify Web API endpoint: https://developer.spotify.com/web-api/endpoint-reference/

    var config = {
        headers: {
            'X-Mashape-Key': 'HxFuT1PGc1msh9eSKHg2vzJhATGDp1sRXxmjsnZ5LqALBcafTd',
			'Accept': 'text/plain'
        }
    };

    return {
        getData: function(query, type) {
            var deferred = $q.defer();

            $http.get('https://api.spotify.com/v1/search?q=' + query + '&type=' + type).then(success, error);

            function success(response) {
                deferred.resolve(response.data[type + 's'].items);
            }

            function error(response) {
                console.log(response);
                deferred.reject(response);
            }

            return deferred.promise;
        },

        getAlbums: function(tracks) {
            var deferred = $q.defer();
            var reqs = [];

            for (var i = 0; i < tracks.length; i++) {
                reqs.push($http.get('https://api.spotify.com/v1/tracks/' + tracks[i].id));
            }

            $q.all(reqs).then(success, error);

            function success(response) {
                deferred.resolve(response);
            }

            function error(response) {
                console.log(response);
                deferred.reject(response);
            }

            return deferred.promise;
        }

    };
}]);
