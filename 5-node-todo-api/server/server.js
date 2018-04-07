var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json()); //app.user takes middleware

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

app.get('/todos', (req, res) => {
    Todo.find()
        .then((todos) => {
            res.send({todos})
        }, (e) => {
            res.status(400).send(e);
        })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started on port 3000');
});


module.exports = {app};