var express = require('express');
var router = express.Router();
var fs = require('fs');
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  var textContent = fs.readFileSync('./public/uploads/3textContent', 'utf8');
  var title = fs.readFileSync('./public/uploads/3title', 'utf8');
  res.render('3', { title: '四川省教学质量成果申报', indexContent: textContent.replace(/\r\n/g,"<br/>"), title: title});
});

module.exports = router;
