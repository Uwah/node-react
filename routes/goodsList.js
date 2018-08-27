const express = require('express')
const router = express.Router()
const httpRequest = require('../server/api/httpRequest')

router.get('/list', (req, res, next) => {
  console.log(req.query)
  httpRequest('GET', 'dictionary.queryDictionaryListByTypeAndLevel', req, req.query, function(data, status) {
    
    data = JSON.parse(data)
    res.send({data: data.data, success: true})

  })
})



module.exports = router