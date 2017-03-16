var express = require('express');
var router = express.Router();
var fs = require('fs');
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  var news = JSON.parse(fs.readFileSync('./public/news/news.json', 'utf8'));
  var textContent = 'Null';
  var content = 'Null';
  var title = req.query.title || 'Null';
  _(news).forEach(function(news){
    if (news.title === req.query.title) {
      textContent = news.content;
      content = textContent.replace(/\r\n/g,"<br/>");
    }
  });
  res.render('news', {indexContent: content + '<br/>', title: title});
});

module.exports = router;
