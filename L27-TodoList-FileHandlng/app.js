// LEARNING TO BUILD APIs
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));

let todos = ["Cricket", "Dance", "Sing", "Hockey"];

// 1. GET '/todos': Return all the todos
app.get('/todos',(req,res)=>{
    res.send(todos);
})

// 2. POST '/todos': Add a newTask to todos array
app.post('/todos',(req,res)=>{
    const {newTask} = req.body;
    todos.unshift(newTask);
    res.redirect('/todos'); 
})
// 3. GET '/deletetask' : Delete  a task from todo list by name
    // name will come in query parameter
app.get('/deletetask',(req,res)=>{
    const {name} = req.query;
    todos = todos.filter(t=> t !== name);
    res.redirect('/todos'); 
})

// 4. GET '/increase' : Increase the priority of a given task {name}
app.get('/increase',(req,res)=>{
    const {name} = req.query;
    let index = todos.indexOf(name)
    if(index != -1 && index >0 && index < todos.length){
        [todos[index], todos[index-1]] = [todos[index-1], todos[index]];
    }
    res.redirect('/todos'); 
})

// 4. GET '/decrease' : Decrease the priority of a given task {name}
app.get('/decrease',(req,res)=>{
    const {name} = req.query;
    let index = todos.indexOf(name)
    if(index != -1 && index >=0 && index < todos.length-1){
        [todos[index], todos[index+1]] = [todos[index+1], todos[index]];
    }
    res.redirect('/todos'); 
})

app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});