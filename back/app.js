const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const { sequelize } = require('./models');

const app = express();


sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

  app.use(express.json()); //front에서 json형식으로 데이터를 보냈을 때 json형식을 req.body안에 넣어주고 
  app.use(express.urlencoded({ extended: true })); //form submit을 했을 때 데이터를 req.body를 넣어줌

app.get('/', (req, res) => {
    res.send('hello express');
});
app.get('/api', (req, res) => {
    res.send('hello api');
});
app.get('/api/posts', (req, res) => {
    res.json([
        { id:1, content: 'hello' },
        { id:2, content: 'hello2' },
        { id:3, content: 'hello3' },
    ]);
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행 중')
});