var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
  console.log('>>>>>>>>>>>>>>>>>')
  console.log(req.body)
  console.log('>>>>>>>>>>>>>>>>>')
  // res.redirect('/home')
  res.send('ok')
});

module.exports = router;
