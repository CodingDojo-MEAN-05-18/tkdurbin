const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var mongoose = require('mongoose');

const port = process.env.PORT || 8000;
const app = express();

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
   mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
   var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

mongoose.Promise = global.Promise;

app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({name: req.body.name, age: req.body.age});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        res.redirect('/');
      }
    })
})
  
// The root route -- we want to get all of the users from the database and then render the index view passing it all of the users
app.get('/', function(req, res) {
    User.find({}, function(err, users) {
      // This is the method that finds all of the users from the database
      // Notice how the first parameter is the options for what to find and the second is the
      //   callback function that has an error (if any) and all of the users
      // Keep in mind that everything you want to do AFTER you get the users from the database must
      //   happen inside of this callback for it to be synchronous 
      // Make sure you handle the case when there is an error, as well as the case when there is no error
    })
  })

app.set('vieww engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (request, response) {
    console.log('inside index route');
    // console.log(request);

    response.render('index.ejs');
});

app.post('/process', function (request, response) {
    console.log('body', request.body);
    names.push(request.body.name);


    response.render('result.ejs', {
        name: request.body.name,
        names: names,
    // response.redirect('/');
    });
});

app.get('/names/:index', function (request, response) {
    console.log(request.params);
    response.send(names[request.params.index]);
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));

// Dependencies
const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 3000;

// Create express app
const app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));

// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Create connection to database
const connection = mongoose.connect("mongodb://localhost/dog_db");

// Create dog schema and attach it as a model to our database
const DogSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

// Mongoose automatically looks for the plural version of your model name, so a Dog model in Mongoose looks for 'dogs' in Mongo.
const Dog = mongoose.model('Dog', DogSchema);

// Routes go here!
app.get('/', function(req, res){
  Dog.find({}, function(err, results){
    if (err) { console.log(err); }
    res.render('index', { dogs: results });
  });
});

// Create
app.post('/', function(req, res){
  // Create a new dog!
  Dog.create(req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/')
  });
});

// New
app.get('/new', function(req, res){
  res.render('new');
});

// Show
app.get('/:id', function(req, res){
  Dog.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('show', { dog: response[0] });
  });
});

app.get('/:id/edit/', function(req, res){
  Dog.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('edit', { dog: response[0] });
  })
});

// Update
app.post('/:id', function(req, res){
  Dog.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

// Delete
app.post('/:id/delete', function(req, res){
  Dog.remove({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});


app.listen(port, function(){
  console.log("Running on ", port);
});