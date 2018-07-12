const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('index');
});

app.get('/users/:id', function (request, response) {
    console.log('The user id requested is:', req.params.id);
    response.send('You requested the user with id:' + request.params.id);
});

// app.use(session({
    // secret: 'keyboardkitteh',
    // resave: false,
    // saveUninitialized: true,
    // cookie: { maxAge: 6000 }
// }));

app.post('/users', function (request, response) {
    console.log('Post Data\n\n', request.body)
    // request.session.name = request.body.name;
    console.log(request.session.name);
   
    response.redirect('/');
});

app.listen(8000, function() {
    console.log("listening on port 8000");
   });



