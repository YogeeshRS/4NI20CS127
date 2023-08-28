const express = require('express');
const fetchData = require('./dataFetch');

const app = express();
const PORT = 3000;
app.get('/numbers', async(req,res)=>{
    const urls = req.query.url;
    if(!urls || Array.isArray(urls)){
        return res.status(400).json({error:'Invalid URL parameters'});

    }

   // const mergedNumbers = [];
    const fetchPromises = urls.map((url)=>fetchData(url));
    const numbersArrays = await Promise.all(fecthPromises);

    const mergedNumbers = numbersArrays.reduce((acc, numbers)=>{
        return acc.concat(numbers);
    }, []);

    // numbersArrays.forEach((numbers)=>{
    //     mergedNumbers.push(...numbers);

    // });
    const uniqueSortednumbers = [...new Set(mergedNumbers)].sort((a,b) => a-b);
    res.json({numbers:uniqueSortednumbers});

});
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    
});