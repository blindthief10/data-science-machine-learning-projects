var Todos = require('../models/model');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.get('/api/todo/:uname', function(req, res) {
    Todos.find({username: req.params.uname}, function(err, results) {
      if (err) throw err;
      res.send(results);
    });
  })

  app.get('/api/todos/:id', function(req, res) {
    Todos.findById({_id: req.params.id}, function(err, results) {
      if (err) throw err;
      res.send(results);
    })
  })

  app.post('/api/todos', function(req, res) {
    if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, {todo: req.body.todo,
         isDone: req.body.isDone,
         hasAttachment: req.body.hasAttachment}, function(err, data) {
        if (err) throw err;
        res.send('Success! Data has been updated!');
      })
    } else {
      var newTodo = Todos({
        username: 'Kostas',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      })
      newTodo.save(function(err) {
        if (err) throw err;
        res.send('Success! We have a new entry.');
      })
    }
  })

  app.delete('api/todo', function(req, res) {
    Todos.findByIdAndRemove(req.body.id, function(err) {
      if (err) throw err;
      res.send('Success! Data was deleted!');
    })
  })
}
