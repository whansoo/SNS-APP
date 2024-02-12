const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const passport = require('passport');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const { sequelize } = require('./models');
const passportConfig = require('./passport');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();
const app = express();


sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });
passportConfig();
 
app.use(morgan('dev'));
  app.use(cors({
    origin: true, //cors 오류를 해결하기 위해 back에서 설정해줘야함 요청하는 모든 출처를 허용 함
    credentials: true, //cookie를 공유하기 위해서 설정
  }));
  app.use('/', express.static(path.join(__dirname, 'uploads')));
  app.use(express.json()); //front에서 json형식으로 데이터를 보냈을 때 json형식을 req.body안에 넣어주고 
  app.use(express.urlencoded({ extended: true })); //form submit을 했을 때 데이터를 req.body를 넣어줌
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  
app.get('/', (req, res) => {
    res.send('hello express');
});


app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행 중')
});