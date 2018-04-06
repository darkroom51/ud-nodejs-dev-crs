var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //primises over default callbacks
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        require: true,
        minlenght: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo2 = new Todo({
//     text: 'Im not sure',
//     completed: false,
//     completedAt: 0
// });

// newTodo2.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo', e)
// });

var User = mongoose.model('User', {
    email:{
        type: String,
        required: true,
        trim: true,
        minlenght: 1
    }
});

var user = new User({
    email: '',
});

user.save()
    .then((doc) => {
        console.log('Saved user', doc)
    }, (err) => {
        console.log('Error user', err)
    });