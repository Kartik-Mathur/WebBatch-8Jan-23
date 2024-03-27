const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname,'public')));

app.get('/gettask',(req,res)=>{
    const {task} = req.query;
    res.send(task);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});