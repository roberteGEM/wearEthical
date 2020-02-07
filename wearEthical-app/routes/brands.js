var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb+srv://Roberte:Q8N8Y29jtOnE04Os@wearethical-cjy6z.mongodb.net/test?retryWrites=true&w=majority', ['brand']);


router.get('/brands', function (req, res, next) {
  console.log(db);
  db.collection("brands").find(function (err, brands) {
    if (err) {
      res.send(err);
    }

    res.json(brands);
  });
});

module.exports = router;
