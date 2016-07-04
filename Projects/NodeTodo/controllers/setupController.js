var Todos = require('../models/model');

module.exports = function(app) {

  app.get('/api/setupTodos', function(req, res) {

  var startData = [
    {
      username: 'blindthief10',
      todo: 'Learn Node',
      isDone: false,
      hasAttachment: false,
    },
    {
      username: 'blindthief10',
      todo: 'Get the milk',
      isDone: false,
      hasAttachment: false,
    },
    {
      username: 'blindthief10',
      todo: 'Walk the dog out',
      isDone: false,
      hasAttachment: false,
    }
  ];

    Todos.create(startData, function(err, results) {
      res.send(results);
    });
  })
}
