var express = require('express');
var router = express.Router();
const axios = require('axios')
/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('>>>>>>>>>>>>>>>>>')
  console.log(req.body)
  console.log(req.path)
  console.log('>>>>>>>>>>>>>>>>>')
  res.send({text: 'ok', success: true})
  // next()
  
  // return res.redirect('/')
  // window.location.replace('/')
  
  axios.post('daq.user.web.login', {
    loginParam: req.body
  }).then(res => {
    console.log('@@@@@@@@@@@@@@@@@@@@@')
    console.log(res)
    res.send('ok')
  })
  
});

module.exports = router;
