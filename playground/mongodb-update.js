//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b1993521ce8931eecc20e8d')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b1993521ce8931eecc20e8e')
  }, {
    $set: {
      name: 'Mike'
    },
    $inc: {
      age: 1
    }
  }, {
      returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
