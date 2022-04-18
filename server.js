const express = require('express');

const PORT = 8080;

// APP
const app = express();
app.get('/', (req,res) => { // req, res를 생성해 res를 보내줌
    res.send("Hello World")
});

app.listen(PORT); // PORT를 넣어주면 설정된 포트 8080에서 실행이 됨


// 기본적인 Nodejs 완성

//  Node js를 어떻게 도커 환경에서 실행가능한지 이어서

