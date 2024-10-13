const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('ex...');
        res.json(response.data);
    } catch(error) {
        console.error('error');
    }
});

app.post('/api/data', async(req, res) => {
    try{
        const response = await axios.post('ex...', req.body);
        res.json(response.data);
    } catch (error) {
        console.error('error');
    }
});

app.listen(PORT, () => {
    console.log('서버 시작');
})
