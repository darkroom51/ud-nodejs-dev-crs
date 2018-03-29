//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //same as above



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Something to do'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // deleteMany if property dont exists
    // db.collection('Todos').deleteMany({text: { $exists: false }})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'finish this course'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({_id: new ObjectID('5abcdbbcd72d6f6f0f045d2a')})
    //     .then((result) => {
    //         console.log(result);
    //     })

    // delete all Waldek
    // db.collection('Users').deleteMany({name: 'Waldek'});

    
    // find one and delete
    // db.collection('Users').findOneAndDelete({_id: new ObjectID('5abc2dc2003be774f6d4beb7')})
    //     .then((result) => {
    //         console.log(JSON.stringify(result, undefined, 2));
    //     })
   
    db.close();
});