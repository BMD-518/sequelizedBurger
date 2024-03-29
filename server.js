var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();

// Display static page content
app.use(express.static(__dirname + '/public'));


// Parse as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes for server access
var routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT);
});

