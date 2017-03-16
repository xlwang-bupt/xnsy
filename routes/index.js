var express = require('express');
var router = express.Router();
var fs = require('fs');
var _ = require('lodash');
var indexContent = fs.readFileSync('./public/uploads/1textContent', 'utf8');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '四川省教学质量成果申报', indexContent: indexContent + '<br/>'});
});

module.exports = router;
