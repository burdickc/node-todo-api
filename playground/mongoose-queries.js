const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b1ad16f144fe460427f41cd';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

var id = '5b19a11fc6706b362942a55a';

if (!ObjectID.isValid(id)) {
   console.log('Id not valid');
 }

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User by Id', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
