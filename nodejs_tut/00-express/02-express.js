const express = require('express');
const app = express();
const usersRoute = require('./routes/usersRoute');
const itemsRoute = require('./routes/itemsRoute');

// main express 파일에서 공통경로 /users로 router 설정
/* app.use(공통경로, 라우터) */
app.use('/users',usersRoute); // Middleware =>  request <- 추가적인 작업해주는 software -> response
app.use('/items/',itemsRoute);

app.listen(3000);