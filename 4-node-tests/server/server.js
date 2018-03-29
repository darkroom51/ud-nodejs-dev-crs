const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {name: 'Andrew', age: 25},
        {name: 'Waldek', age: 37},
        {name: 'Tyler', age: 28}
    ]);
});

app.listen(3333);
module.exports.app = app;