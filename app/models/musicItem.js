var mongoose = require('mongoose');

// Schema for a music item
module.exports = mongoose.model('MusicItem', {
    id : String,
    url: String,
    trackname: String,
    artist: String,
    album: String,
    number: Number,
    year: Number
});