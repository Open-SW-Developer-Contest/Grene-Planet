## back_end

### 구현 계획 <br>
- 로그인, 회원가입
- 게시판
- 환경 뉴스 (크롤링)
- 펀딩

### 구현 완료 및 보완 사항
- 로그인, 회원가입 
    - jwt 로그인으로 적용하기
- 게시판
- 환경 뉴스 (json 형식의 크롤링)
<br>

### 파일 구조

```bash

├── back_end
│
├── Dockerfile
├── README.md
├── config
│   ├── db.js
│   ├── default.json
│   └── secret.js
├── docker-compose.yml
├── middleware
│   ├── auth.js
│   └── passport.js
├── models
│   ├── User.js
│   └── board.js
├── package-lock.json
├── package.json
├── routes
│   └── api
│       ├── boardRouter.js
│       ├── getUser.js
│       ├── login.js
│       ├── news.js
│       └── register.js
└── server.js
