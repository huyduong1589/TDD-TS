var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var usr = req.body.email;
  var pass = req.body.password;
  if (usr == 'dmhuy@tma.com.vn' & pass == '123456'){
    res.send({message: "login successfully"});
    res.status(200);
    res.end;
  }

  else {
    res.send({message: "login failed"});
    res.status(403);
    res.end;
  }
});

module.exports = router;
