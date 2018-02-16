var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json("aaaa")
});

//******* For rendering HTML file */
// router.get('/w1', function(req, res, next) {
//   res.render('1/w1', { title: 'Express' });
// });

module.exports = router;
