var FavouriteItem = require('./models/musicItem');

var getAllItems = function(res) {
	MusicItem.find(function(err, items) {
        if (err) {
    	    res.send(err);
	    } else {
            res.json(items);
	    }
    });
};

// Define and export all Express REST api routes
module.exports = function(app) {
	app.get('/api/tracks', function(req, res) {  // Return all tracks
        getAllItems(res);
    });

    app.post('/api/tracks', function(req, res) {  // Save a track
        MusicItem.create({
            id: req.body.id,
            url: req.body.url,
            trackname: req.body.trackname,
            artist: req.body.artist,
            album: req.body.album,
            number: req.body.number,
            year: req.body.year
        }, function(err, item) {
            if (err) {
                res.send(err);
		    } else {
	            getAllItems(res);
		    }
        });

     });

    app.delete('/api/tracks/:item_id', function(req, res) {  // Delete track
        MusicItem.remove({
            id : req.params.item_id
        }, function(err, item) {
            if (err) {
                res.send(err);
		    } else {
			    getAllItems(res);
		    }
        });
    });

    // Application
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');  // Load static app at localhost:8080
    });
};