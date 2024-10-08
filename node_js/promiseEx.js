const axios = require('axios');
const url = 'https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json';

axios
    .get(url)
        .then((result) => {
            if(result.status != 200) {
                throw new Error('NOT FOUND');
            }
            if(result.data) {
                console.log('200');
                return result.data;
            }
            throw new Error('No Data');
        })
        .then(
            (data) => {
                if(!data.articleList || data.articleList.size == 0) {
                    throw new Error('No Data');
                }
                return data.articleList;    //영화리스트 반환
            }
        )
        .then(
            (articles) => {
                return articles.map((article, idx) => {
                    return {title: article.title, rank: idx + 1};
                });
            }
        )
        .then(
            (results) => {
                for(let movieInfo of results) {
                    console.log(`#[${movieInfo.rank}위] ${movieInfo.title}`);
                }
            }
        )
        .catch(
            (err) => {
                console.log('ERROR');
                console.log(err);
            }
        );
