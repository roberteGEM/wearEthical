var express = require('express');
var path = require('path');
var bodyParser = require('body-Parser');

var index = require('./routes/index');
var brands = require('./routes/brands');

var port = 3000;

var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder 
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', index);
app.use('/api', brands);

app.listen(port, function () {
  console.log('server started on port' + port);
});
