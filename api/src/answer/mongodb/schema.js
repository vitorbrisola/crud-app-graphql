var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

var Schema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  isRight: {
    type: Boolean,
    required: true
  }
});

var Model = mongoose.model('answer', Schema);
module.exports = Model;