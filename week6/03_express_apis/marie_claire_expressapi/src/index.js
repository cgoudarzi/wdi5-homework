// Require the dependencies
var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars'),
    fs      = require('fs');
    bodyParser = require('body-parser');


// Configure the app
app.engine('hbs', exphbs({//first parameter is view engine
  defaultLayout:  'main',
  partialsDir:    __dirname + '/views/partials',   //__dirname point to the directory where index.js is. in this case 'src'
  layoutsDir:     __dirname + '/views/layouts',
  extname:        '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


// Configure serving static assets (THIS IS MIDDLEWARE)
app.use(express.static(__dirname + '/public'));
// documentation read



// Require the database
// Before the Controllers so db exists and can be worked with
require('./models/db'); 



// Controllers - USING AS MIDDLEWARE
app.use('/users/?', require('./controllers/users')); 


// Define home page
app.route('/?')
  .get(function(req, res, next) {
      res.render('form', {});
  });


// Start server, listen in on a port
var server = app.listen(9000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
