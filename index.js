const express = require('express');

//EXPRESS APP
const app = express() 

app.set('view engine', 'pug') 
app.set('views', __dirname + '/views') 

app.use('/static', express.static(__dirname + '/static'))

app.get('/', (req,res) => {
  res.render('home')
});

app.get('/about', (req,res) => {
  res.render('about')
});

app.get('/contact', (req,res) => {
  res.render('contact')
});

app.listen('8080');