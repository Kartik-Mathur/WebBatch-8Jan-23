const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true})); // this will make the body readable
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json()); // To make axios data readable

// GET: /submit-form | API ka route hai
app.get('/submit-form',(req,res)=>{
    const {username,password} = req.query;
    res.send(`Received GET Request on /submit-form with ${username}, ${password}`)
})

// POST: /submit-form | API ka route hai
app.post('/submit-form',(req,res)=>{
    console.log("BODY" ,req.body);
    const {username,password} = req.body;
    res.send(`Received POST Request on /submit-form with ${username}, ${password}`)
})


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});