// require all the dependencies
var express     = require('express'),
    app         = express(),
    exphbs      = require('express-handlebars'),
    hbs         = require('hbs'),
    gulp        = require('gulp'),
    gls         = require('gulp-live-server'),
    fs          = require('fs'),
    bodyParser  = require('body-parser'); // probably don't need this

// kind of forget what these do Probably don't need them
  // app.use(bodyParser.json())// supports json encoded bodies
  // app.use(bodyParser.urlencoded({extended: true}))// supports encoded bodies
// Configuring the applicartion
app.engine('hbs', exphbs({
  defaultLayout:  'main',
  partialsDir:    __dirname + '/views/partials',
  layoutsDir:     __dirname + '/views/layouts',
  extname:        '.hbs'
}));

app.use(bodyParser.json())// supports json encoded bodies
app.use(bodyParser.urlencoded({extended: true}))// supports encoded bodies

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Configure serving static assets
app.use(express.static(__dirname + '/public'));
// requires the mongoose database
require('./models/db');

// restful routing 
app.use('/users/?', require('./controllers/users'));

// Start server, listen in on a port
var server = app.listen(3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
