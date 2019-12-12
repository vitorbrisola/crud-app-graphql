var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
  answers: [{
    type: String
  }]
});

var Model = mongoose.model('test', Schema);
module.exports = Model;