var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('changepassword', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var usr = req.body.email;
  var pass = req.body.oldpassword;
  console.log(usr);
  console.log(pass);
  if (usr == 'dmhuy@tma.com.vn' & pass == '123456'){
    res.send({message: "Change password successfully"});
    res.status(200);
    res.end;
  }
})
module.exports = router;