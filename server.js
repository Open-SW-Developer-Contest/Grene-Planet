// express 불러오기
var express = require('express');
var connectDB = require("./config/db");
var session = require('express-session'); // 세션 설정
var passport = require('passport'); // 여기와
var passportConfig = require('./middleware/passport'); // 여기
var secretObj = require('./config/secret');
// app 생성
var app = express();
// cors
var cors = require("cors");

connectDB();

// PORT 번호 기본값 3000으로 설정
var PORT = process.env.PORT || 3000;
var sessionSecret = secretObj.sessionSecret

var corsOptions = {
    origin: true,
    credentials: true
};

// passport
passportConfig();
app.use(session({ secret: sessionSecret, resave: true, saveUninitialized: false })); // 세션 활성화
// passport를 미들웨어로 등록
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결
app.use(cors(corsOptions));
app.use(express.json());  // app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true })); // ??

// listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// api route
app.use("/board", require("./routes/api/boardRouter"));
app.use("/register", require("./routes/api/register"));
app.use("/getUser", require("./routes/api/getUser"));
app.use("/", require("./routes/api/login"));