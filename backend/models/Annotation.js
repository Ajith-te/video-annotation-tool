const mongoose = require('mongoose');

const annotationSchema = new mongoose.Schema({
  videoId: String,
  type: String,
  text: String,
  coordinates: Object,
  timestamp: Number,
  comments: String,
});

module.exports = mongoose.model('Annotation', annotationSchema);
