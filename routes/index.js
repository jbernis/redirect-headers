var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'JLB' });
  const b = JSON.stringify({headers:req.headers,args: req.query, url: req.headers.host+req.url}).replace(/\\/g, '');
  res.send(b)
});
router.post('/', function(req, res, next) {
  //res.render('index', { title: 'JLB' });
  console.log(req.body)
  console.log(req.data)
  const b = JSON.stringify({headers:req.headers,args: req.body, url: req.headers.host+req.url}).replace(/\\/g, '');
  res.send(b)
});

module.exports = router;
