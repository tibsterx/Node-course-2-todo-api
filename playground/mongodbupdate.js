//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // //Find One And update
  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('59149484a10e4b37b18c64ee')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  //   }, {
  //     returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({_id: new ObjectID('59122631a276360b2c928cba')
  }, {
    $set: {
      Name: 'Tyla'
    }
  }, {
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
