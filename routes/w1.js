var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/w1', function(req, res, next) {
//   res.json("hjgjg");
// });
//******* For rendering HTML file */
 router.get('/w1', function(req, res, next) {
   res.render('1/w1', { title: 'Express' });
 });
module.exports = router;
