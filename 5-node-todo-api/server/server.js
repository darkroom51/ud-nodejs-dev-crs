require('./config/config'); //import all from config

var _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json()); //app.user takes middleware

// POST /todos
app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text //data from json from request
	});
	todo.save()
		.then((doc) => {
			res.send(doc);
		}, (err) => {
			res.status(400).send(err);
		})
});

// GET /todos
app.get('/todos', (req, res) => {
	Todo.find()
		.then((todos) => {
			res.send({ todos }) // {todos: todos}
		}, (e) => {
			res.status(400).send(e);
		})
});

// GET /todos/1243242432
app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	if (!ObjectID.isValid(id)) { // invalid id pattern
		console.log('Invalid Id pattern');
		return res.status(404).send(); // 404 and empty response
	}

	Todo.findById(id)
		.then((todo) => {
			if (!todo) { // id OK pattern but not found so todo === null
				return res.status(404).send();
			}
			res.send({ todo }); // {todo} ---> {todo: todo}
		}, (e) => { // promise rejected
			res.status(400).send();
			console.log('Promise rejected:', e);
		});
});

// DELETE /todos/1234324323
app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;

	if (!ObjectID.isValid(id)) { // invalid id pattern
		return res.status(404).send(); // 404 and empty response
	}

	Todo.findByIdAndRemove(id)
		.then((todo) => {
			if (!todo) { // id OK pattern but not found so todo === null
				return res.status(404).send();
			}
			res.send({ todo }); // return {} like in jsonplaceholder
		}, (e) => { // promise rejected
			res.status(400).send();
			console.log('Promise rejected:', e);
		});
});

// PATCH /todos/123412341234
app.patch('/todos/:id', (req, res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text', 'completed']); // pick which prop is to update

	if (!ObjectID.isValid(id)) { // invalid id pattern
		return res.status(404).send(); // 404 and empty response
	}

	if (_.isBoolean(body.completed) && body.completed) {
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
		.then((todo) => {
			if (!todo) {
				return res.status(404).send();
			}
			res.send({ todo });
		})
		.catch((e) => {
			res.status(400).send();
		})
});

// Users ------------------------------------------------------

app.post('/users', (req, res) => {
	var body = _.pick(req.body, ['email', 'password']);
	var user = new User(body); // body = {email: req.body.email, password: req.body.password}

	user.save()
		.then(() => {
			return user.generateAuthToken();
		})
		.then((token) => {
			res.header('x-auth', token).send(user);
		})
		.catch((err) => {
			res.status(400).send(err);
		})
});

// server listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('Server started on port 3000');
});


module.exports = { app };