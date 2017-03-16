var express = require('express');
var router = express.Router();
var fs = require('fs');
var _ = require('lodash');
var textContent = fs.readFileSync('./public/uploads/5textContent', 'utf8');

/* GET home page. */
router.get('/', function(req, res, next) {
  var news = JSON.parse(fs.readFileSync('./public/news/news.json', 'utf8'));
  var newsTitles = [];
  _(news).forEach(function(news) {
    if (news.page && news.page === '5') {
      newsTitles.push(news.title);
    }
  });
  var newsTitlesArray = _.chunk(newsTitles, 5);
  var pagesNumberAll = [];
  for(var number = 1; number <= newsTitlesArray.length; number++) {
    pagesNumberAll.push(number);
  }
  var newsTitlesShow = newsTitlesArray[req.query.page || 0] || [];
  var forwardPage;
  var nextPage;
  if (req.query.page) {
    if (req.query.page > 0) {
      forwardPage = _.parseInt(req.query.page) - 1;
    } else {
      forwardPage = req.query.page;
    }
    if (req.query.page < newsTitlesArray - 1) {
      nextPage = _.parseInt(req.query.page) + 1;
    } else {
      nextPage = req.query.page;
    }
  } else {
    forwardPage = 0;
    if (newsTitlesArray.length > 0) {
      nextPage = 1;
    } else {
      nextPage = 0;
    }
  }

  res.render('5', { title: '四川省教学质量成果申报',
    newsTitles: newsTitlesShow,
    pagesNumberAll: pagesNumberAll,
    forwardPage: forwardPage,
    nextPage: nextPage
  });
});

module.exports = router;
