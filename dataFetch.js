const axios = require('axios');
//url = 'http://20.244.56.144/numbers/odd';
const fetchData = async (url) =>{
    try{
        const res = await axios.get(url, {timeout : 500});
        return res.data.numbers;

    }catch(error){
    return [];
    }
};

module.exports = fetchData;
