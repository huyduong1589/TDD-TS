var express = require('express');
var router = express.Router();

/* GET home page. */
var ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {people: people});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  res.render('index',{html});
});

module.exports = router;
