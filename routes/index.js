var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const name = "henri";
  res.render('index', { title: name });
});

module.exports = router;
