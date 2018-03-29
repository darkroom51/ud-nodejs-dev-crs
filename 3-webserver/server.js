const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3333;
var app = express();




// way 3. handlebars - dynamic templates
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');




// next() - if passed as 3rd param, stops app unless it's called
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append server.log');
        }
    });
    next();
});




// app stops here, preventing to load any pages
// app.use((req, res, next) => {
//    res.render('maintenance.hbs'); 
// });



// way 2. load static pages from /public dir
app.use(express.static(__dirname + '/public'));



// handlebars helper: global variables
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

// dynamic content with hbs templates
app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'hello waldek'
        //currentYear: new Date().getFullYear() // local variable
    });
});

// dynamic content with hbs templates
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});



// way 1. hardcoded HTML or JSON
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'wrong request'
    });
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});