var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');
var multer = require('multer');
var _ = require('lodash');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/news/pics')
  },
  filename: function (req, file, cb) {
    var sourcePicName = req.body.title + 'Pic';
    var picName = sourcePicName.replace(/ /g,"");
    cb(null, picName)
  }
});
var upload = multer({ storage: storage });

/* GET upload listing. */
router.get('/', function(req, res) {
  res.render('newsUpload', { title: 'newsUpload' });
});
router.post('/', upload.single('logo'), function(req, res, next){
  var file = req.file;
  var news = JSON.parse(fs.readFileSync('./public/news/news.json', 'utf8'));
  var addNews = {};
  addNews.title = req.body.title.replace(/ /g,"");
  addNews.content = req.body.textContent;
  addNews.page = req.body.textName;
  news.push(addNews);
  fs.writeFile('public/news/news.json', JSON.stringify(news), function(err){
    if (err) throw err;
    console.log('保存' + req.body.title + '完毕！');
  });
  console.log('文件类型：%s', file.mimetype);
  console.log('原始文件名：%s', file.originalname);
  console.log('文件大小：%s', file.size);
  console.log('文件保存路径：%s', file.path);

  res.send({ret_code: '0'});
});

module.exports = router;
