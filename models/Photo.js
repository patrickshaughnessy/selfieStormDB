'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var photoSchema = Schema({
  image: String,
  title: String,
  description: String,
  location: {
    x: Number,
    y: Number
  },
  time: { type: Date, default: Date.now }
});

var Photo = mongoose.model('Photo', photoSchema);
module.exports = Photo;
