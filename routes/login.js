var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var usr = req.body.email;
  var pass = req.body.password;
  console.log(usr);
  console.log(pass);
  if (typeof usr === 'undefined' || typeof pass === 'undefined'){
    res.send({message: "bad request"});
    res.statusCode(400).json(json_response);
    res.end;
  }

  else if (usr == 'dmhuy@tma.com.vn' & pass == '123456'){
    res.send({message: "login successfully"});
    res.status(200);
    res.end;
  }

  else {
    res.send({message: "login failed"});
    res.status(403).end();
  }
});

module.exports = router;
