var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  description: {
    type: String,
    required: true
  }
});

var Model = mongoose.model('question', schema);
module.exports = Model;