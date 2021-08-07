var express = require('express');

var router = express.Router();              // express의 Router 사용
var passport = require('passport');

// passport.authentiacte 내부 메커니즘에 의해 middleware/passport의 LocalStrategy로 이동 후 인증 처리
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login'   // 로그인 실패 시 다시 로그인 창으로
  }), (req, res) => {
    res.redirect('/home');
  });
/*
router.post(
    '/',
    async (req, res) => {
        // req의 body 정보를 사용하려면 server.js 에서 따로 설정을 해줘야한다.
        var paramId = req.body.email || req.query.email;
        var pw = req.body.password || req.query.password;
        if (req.user) {
            console.log('이미 로그인 되어있음');
            res.send('already login');
        } else {
            req.user = {
                email: paramId,
                password: pw,
                name: req.name,
                authorized: true
            };
            res.send('login success');
            console.log(req.user);
            console.log(User);
        }
    }
);
*/
// exports
module.exports = router;