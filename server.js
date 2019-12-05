var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var expHb = require('express-handlebars');

app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT);
});

