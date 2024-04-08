const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Path specific middlewares
// Works for: /result, /result/a, /result/a/b/c/d
// Won't work for: /resulta
app.use('/result', (req, res, next) => {
    console.log("Running Result Middleware");
    // next() call hua toh request aage jaegi, else aage nahi jaegi
    next();
})
let x = true;
// generic middleware: Works for all requests
app.use((req,res,next)=>{
    console.log("Running Generic Middleware");
    if(x == false) return res.send("Not Allowed") ;

    next();
});

const isLoggedIn = require('./middlewares/isLoggedIn');
// Exact path match middleware
app.get('/',isLoggedIn,(req,res,next)=>{
    res.send("Hello World");
})

app.get('/result',(req,res)=>{
    res.send("Result Request received success");
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});