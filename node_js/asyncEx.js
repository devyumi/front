const axios = require('axios');

async function getTop20Movies() {
    const url = 'https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json';

    try {
        //1. 네트워크에서 데이터를 모두 전송받을 때까지 await
        const result = await axios.get(url);

        //2. result에 data 프로퍼티를 추출
        const {data} = result;
        
        if(!data.articleList || data.articleList.size == 0 ) {
            throw new Error('No Data');
        }
        const movieInfos = data.articleList.map((article, idx) => {
            return {title: article.title, rank: idx + 1};
        });

        for(let movieInfo of movieInfos) {
            console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
        }

    } catch(err) {
        throw new Error(err);
    }
}

getTop20Movies();
