const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5ac8cad60fe73f104412a42d';
var wrongId = '6ac8cad60fe73f104412a42d';
var invalidId = 'A6ac8cad60fe73f104412a42d';
var userId = 'z5ac7da389b3b1b251c30f5f9';

if (!ObjectID.isValid(invalidId)) { // check ID is valid pattern
	console.log('Todo Id not valid');
}

Todo.find({ _id: id })
	.then((todos) => {
		console.log('Todos: ', todos)
	})

Todo.findOne({ _id: id })
	.then((todo) => {
		console.log('Todo: ', todo)
	})

Todo.findById(id)
	.then((todo) => {
		console.log('Todo By Id: ', todo)
	})

Todo.findById(wrongId)
	.then((todo) => {
		if (!todo) { // todo is null
			return console.log('todo Id not found');
		}
		console.log('Todo By Id: ', todo);
	})
	.catch((e) => {
		console.log('Promise rejected: ', e);
	})




if (!ObjectID.isValid(userId)) {
	console.log('User Id not valid');
} else {
	User.findById(userId)
		.then((user) => {
			if (!user) {
				return console.log('User not found');
			}
			console.log('user By Id: ', user);
		})
		.catch((e) => {
			console.log('Promise rejected: ', e);
		})
}

//or

User.findById(userId)
	.then((user) => {
		if(!user){
			return console.log('user not found');
		}
		console.log(user);
	}, (e) => { // also can be moved to .catch()
		console.log('Promise rejected: ', e);
	})


