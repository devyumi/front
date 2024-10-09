const express = require('express');
const app = express();
let posts = []; //게시글 리스트로 사용할 posts에 빈 리스트 할당

//req.body 를 사용하려면 JSON 미들웨어를 사용해야 한다.

app.use(express.json());    //JSON 미들웨어 활성화

//POST 요청 시 Content-Type이 application/x-www-form-urlencode 인 경우 파싱
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.json(posts);
});

app.post('/posts', (req, res) => {
    const {title, name, text} = req.body;
    posts.push({id: posts.length + 1, title, name, text, createDt: Date()});
    res.json({title, name, text});
});

app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    const filterPosts = posts.filter((post) => post.id !== +id);    //글 삭제 로직
    const isLengthChanged = posts.length !== filterPosts.length;    //삭제 확인

    posts = filterPosts;
    if (isLengthChanged) {
        res.json('OK');
        return;
    } else {
        res.json('Not Changed!');
    }
});

app.listen(3000, () => console.log('서버 시작'));
