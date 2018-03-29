//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //same as above

// note: if you want to use/add _id locally in app
// var _id = new ObjectID(); // creates _id same as in mongodb
// console.log(_id);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    //insert into Todos
    // db.collection('Todos').insertOne({}, () => {});
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to inert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // insert into Users
    // db.collection('Users').insertOne({
    //     name: 'Waldek',
    //     age: 37,
    //     location: 'nowhere'
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});