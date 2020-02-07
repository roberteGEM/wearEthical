const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const cors = require("cors");
const mongoose = require("mongoose");

const index = require('./routes/index');
const brands = require('./routes/brands');

const port = 3000;

const app = express();
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
