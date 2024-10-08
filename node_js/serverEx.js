const http = require('http');
const url = require('url');

http
    .createServer((req, res) => {
        const path = url.parse(req.url, true).pathname;        
        res.setHeader('Content-Type', 'text/html; charset=utf-8');

        if(path in urlMap) {
            urlMap[path](req, res);
        } else {
            notFound(req, res);
        }
    }

).listen('3000', () => console.log('router server!'));


const user = (req, res) => {
    const userInfo = url.parse(req.url, true).query;     
    res.end(`[user] name: ${userInfo.name}, company: ${userInfo.company}`); //user 결과값
};

const feed = (req, res) => {
    res.end(
        `<ul>
        <li>p1</li>
        <li>p2</li>
        <li>p3</li>
        </ul>
        `
    );  //feed 결과값
};

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end('404 PAGE NOT FOUND');
};

const urlMap = {
    '/': (req, res) => res.end('HOME'),
    '/user' : user,
    '/feed' : feed,
};
