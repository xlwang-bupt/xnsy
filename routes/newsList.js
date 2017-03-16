var express = require('express');
var router = express.Router();
var fs = require('fs');
var _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  var news = JSON.parse(fs.readFileSync('./public/news/news.json', 'utf8') || '[]');
  if (req.query && req.query.title) {
    _.remove(news, function(news) {
      return news.title === req.query.title;
    });
    fs.writeFile('public/news/news.json', JSON.stringify(news), function(err){
      if (err) throw err;
      console.log('删除' + req.body.title + '完毕！');
    });
  }
  var newsTitles = [];
  if (news.length > 0) {
    _(news).forEach(function(news) {
      newsTitles.push(news.title);
    });
  } else {
    newsTitles = ['新闻目录是空的'];
  }
  res.render('newsList', { title: 'Express', newsTitles: newsTitles});
});

router.post('/', function(req, res, next){
  var news = JSON.parse(fs.readFileSync('./public/news/news.json', 'utf8') || '[]');
  if (req.body.title) {
    _.remove(news, function(news) {
      return news.title === req.body.title;
    });
    fs.writeFile('public/news/news.json', JSON.stringify(news), function(err){
      if (err) throw err;
      console.log('删除' + req.body.title + '完毕！');
    });
  }
  res.send({ret_code: '0'});
});

module.exports = router;
