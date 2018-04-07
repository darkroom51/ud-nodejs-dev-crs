const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5ac8cad60fe73f104412a42d';
var wrongId = '6ac8cad60fe73f104412a42d';
var invalidId = 'A6ac8cad60fe73f104412a42d';
var userId = '5ac7da389b3b1b251c30f5f9';


Todo.remove({})
    .then((result) => {
        console.log(result)
    });

Todo.findOneAndRemove({ _id: '' })
    .then((todo) => {
        console.log(todo)
    });

Todo.findByIdAndRemove('')
    .then((todo) => {
        console.log(todo)
    });


