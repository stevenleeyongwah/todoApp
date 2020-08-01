const mongoose = require('mongoose')
const express = require('express')
const todoRoute = require('./routes/todo')
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override')
const app = express()

mongoose.connect('mongodb+srv://steven:type_in_your_own_password@cluster0-qgi5y.mongodb.net/todo?retryWrites=true&w=majority')
        .then("Successfully connected to mongodb")

app.use(expressLayouts);
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/todo', todoRoute)

app.set('layout', 'layouts/layout');

app.listen(4000, (req, res) => {
  console.log("Listening to port 4000")
})
