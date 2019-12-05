var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

var Schema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  }
});

var Model = mongoose.model('question', Schema);
module.exports = Model;