var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, req.body.textName + 'Pic')
  }
});
var upload = multer({ storage: storage });

/* GET upload listing. */
router.get('/', function(req, res) {
  res.render('upload', { title: 'Express' });
});
router.post('/', upload.single('logo'), function(req, res, next){
  var file = req.file;
  fs.writeFile('public/uploads/' + req.body.textName + 'textContent' , req.body.textContent, function(err){
    if (err) throw err;
  console.log('textContent saved!');
  });
  fs.writeFile('public/uploads/' + req.body.textName + 'title' , req.body.title, function(err){
    if (err) throw err;
    console.log('title saved!');
  });
  console.log('文件类型：%s', file.mimetype);
  console.log('原始文件名：%s', file.originalname);
  console.log('文件大小：%s', file.size);
  console.log('文件保存路径：%s', file.path);

  res.send({ret_code: '0'});
});

module.exports = router;
