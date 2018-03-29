//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //same as above



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    // .findOneAndUpdate(filter,update,opt,callback)
    // db.collection('Todos').findOneAndUpdate(
    //     {
    //         _id: new ObjectID("5abcd51cd0ba4a0b07733079")
    //     }, 
    //     {
    //         $set: {completed: true}
    //     },
    //     {
    //         returnOriginal: false
    //     }
    //     )
    //     .then((result) => {
    //         console.log(result);
    //     })

    // find and update Users
    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID("5abc2ab7280e4c7421c9293e")
    // },{
    //     $set: {name: 'waldek'},
    //     $inc: {age: 1}
    // },{
    //     returnOriginal: false
    // })
    //     .then((result) => {
    //         console.log(result);
    //     })

    // note: db.collection.update(query, update, options)
    // for multiple updates
    
    // db.close();
});