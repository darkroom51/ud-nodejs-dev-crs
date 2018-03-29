//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //same as above



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // find all in Todos
    // db.collection('Todos').find().toArray()
    //     .then((docs) => {
    //         console.log('Todos:');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    // db.collection('Todos').find().count()
    //     .then((count) => {
    //         console.log(`Todos count: ${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    // find Waldek in Users
    // db.collection('Users').find({name: 'Waldek'}).toArray()
    //     .then((docs) => {
    //         console.log('Users Waldek:');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch users', err);
    //     });

    // db.collection('Users').find({name: 'Waldek'}).count()
    //     .then((count) => {
    //         console.log(`users count: ${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch users', err);
    //     });

    // note: when .find() by _id you need to:
    // .find({_id: new ObjectID('<stringID>')})

    db.close();
});