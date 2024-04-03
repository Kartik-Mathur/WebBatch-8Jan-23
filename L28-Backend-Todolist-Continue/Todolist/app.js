// LEARNING TO BUILD APIs
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public'))); // will send the index.html of the public folder(if present)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// let todos = ["Cricket", "Dance"];
const Tasks = require('./controller/todos');

// 1. GET '/todos': Return all the todos
app.get('/todos', async (req, res) => {
    try {
        let todos = await Tasks.getTodos();
        res.send(todos);
    }
    catch (err) {
        res.send(err);
    }
    // Tasks.getTodos()
    //     .then(todos => {
    //         console.log(todos)
    //         res.send(todos);
    //     })
    //     .catch(err => {
    //         res.send(err);
    //     })
})

// 2. POST '/todos': Add a newTask to todos array
app.post('/todos', async (req, res) => {
    try {
        const { newTask } = req.body;
        let data = await Tasks.addTask(newTask);
        res.redirect('/todos');
    }
    catch (err) {
        res.send(err);
    }
    // Tasks.addTask(newTask)
    //     .then(msg => {
    //         console.log(msg);
    //         res.redirect('/todos');
    //     })
    //     .catch(err => {
    //         res.send(err);
    //     })
})

// 3. GET '/deletetask' : Delete  a task from todo list by name
// name will come in query parameter
app.get('/deletetask', async (req, res) => {
    try {
        const { name } = req.query;
        let msg = await Tasks.deleteTask(name);
        res.redirect('/todos');
    }
    catch (err) {
        res.send(err);
    }
})

// 4. GET '/increase' : Increase the priority of a given task {name}
app.get('/increase', (req, res) => {
    const { name } = req.query;
    Tasks.increasePriority(name).then((msg) => {
        res.redirect('/todos');
    }).catch(err => {
        res.send(err);
    })
    /*
    let index = todos.indexOf(name)
    if (index != -1 && index > 0 && index < todos.length) {
        [todos[index], todos[index - 1]] = [todos[index - 1], todos[index]];
    }
    res.redirect('/todos');
    */
})

// 4. GET '/decrease' : Decrease the priority of a given task {name}
app.get('/decrease', (req, res) => {
    const { name } = req.query;
    Tasks.decreasePriority(name).then((msg) => {
        res.redirect('/todos');
    }).catch(err => {
        res.send(err);
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});