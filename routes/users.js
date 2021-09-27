var express = require('express');
var router = express.Router();
const circularJSON = require('circular-json');
const stringify = require("json-stringify-pretty-compact");
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.headers)
  
  let json = circularJSON.stringify(req.headers);
  let query = circularJSON.stringify(req.query);
  let host= circularJSON.stringify(req.rawHeaders)
const b = stringify({headers:req.headers,args: req.query, host: req.headers.host+req.url}, null, 4)
 //let str = b.replace(/\\/g, '');
// var finalData = b.replace("\\", "");

 // res.json(req);
 // res.send({headers:json,args: query, host: host})
 res.render(b)

});

module.exports = router;
