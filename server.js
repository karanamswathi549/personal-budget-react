const express = require('express');
const app = express();
const port = 3000;
const data = require("./budgetdata.json");
const cors = require('cors');
// app.use('/', express.static('public'));

app.use(cors());

const budget = { 
    myBudget: [
    {
        title: 'Eat Out',
        budget: 30
    },
    {
        title: 'Rent',
        budget: 350
    },
    {
        title: 'Groceries',
        budget: 90
    }
]};

app.get('/hello',(req,res)=>{
    res.send('Hello world !');
});

app.get('/budget',(req,res)=>{
    res.send(data);
});



app.listen(port, () =>{
    console.log('Example app listening at http://localhost:${port}');
});