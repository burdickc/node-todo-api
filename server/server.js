var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose')
const {ObjectID} = require('mongodb');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
     console.log('Id not valid');
     res.status(404).send();
   }

   Todo.findById(id).then((todo) => {
     if (!todo) {
       res.status(404).send();
     }
     res.send({todo});
   }).catch((e) => res.status(400).send());
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};

// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });

// var newTodo = new Todo({
//   text: 'Something to do'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// var newUser = new User({
//   email: 'test@test.com'
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved User', doc);
// }, (e) => {
//   console.log('Unable to save user', e);
// });
