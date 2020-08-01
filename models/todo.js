const mongoose = require('mongoose')

//Define a schema
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('Todo', todoSchema );
