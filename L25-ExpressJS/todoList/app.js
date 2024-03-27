const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let todos = ["Dancing", "Singing", "Coding", "Reading"];

app.get('/todos',(req,res)=>{
    res.status(200).send(todos);
})

app.get('/addtask',(req,res)=>{
    let {task} = req.query;
    // Agar task already hai toh don't add it to the array
    if(!todos.includes(task)){
        todos.push(task);
    }
    
    res.redirect('/todos');
})

app.use((req,res,next)=>{
    console.log("Yaha par hai")
    res.status(404).json({
        msg: "Kya Ulti Seedhi Req Bhej raha hai mujhe",
        decentMsg: "Error 404: Page not found"
    });
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});