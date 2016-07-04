var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean
});

var Todos = mongoose.model('jake', todoSchema);

// now we can create, update, read or delete data to the Todos Schema!

module.exports = Todos;
