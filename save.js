const mongoose = require('mongoose');
mongoose.connect('mongodb://123.56.246.220/exam11', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected')
});

const AlbumSchema = new mongoose.Schema({
  album_id: String,
  album_name: String,
  public_time: String,
  week: Number,
  price: Number,
  cover: String,
  singers: []
});

var album = mongoose.model('Album', AlbumSchema);

function save(data) {
  return album.create(data)
}

module.exports = save