var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title:'bijay tumsa',body: 'resource from the bijay tumsa db' });
});

module.exports = router;
