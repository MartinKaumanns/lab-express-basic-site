const express = require('express');

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.locals.pageTitle = 'Stephen E. Wilhite';

app.get('/home', (request, response) => {
  response.render('home');
});

app.get('/about', (request, response) => {
  response.render('about', {
    name: 'Stephen E. Wilhite',
    born: 'March 3. 1948',
    invention: 'the gif-format'
  });
});

app.get('/work', (request, response) => {
  response.render('work');
});

app.use(express.static('public'));

app.listen(3003);
