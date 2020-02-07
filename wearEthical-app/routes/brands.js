var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb+srv:// Roberte:Q8N8Y29jtOnE04Os@wearethical-cjy6z.mongodb.net/test?retryWrites=true&w=majority', [brands]);


router.get('/brands', function (req, res, next) {
  res.send('TASK API');
});

module.exports = router;
