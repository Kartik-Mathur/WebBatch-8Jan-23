const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const hbs = require('hbs');

hbs.registerPartials(path.join(__dirname + '/views/partials'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

let todos = ["Cricket", "Dance", "Sing", "Hockey"];

app.get('/', (req, res) => {
    res.render('index', {
        firstname: "Rahul",
        lastname: "Yadav",
        todos
    })
})

app.post('/todos', async (req, res) => {
    try {
        const { newTask } = req.body;
        todos.push(newTask);
        res.redirect('/');
    }
    catch (err) {
        res.send(err);
    }
})

app.get('/deletetask', async (req, res) => {
    try {
        const { name } = req.query;
        todos = todos.filter(t => t!==name);
        res.redirect('/');
    }
    catch (err) {
        res.send(err);
    }
})

app.get('/increase', (req, res) => {
    try {
        const { name } = req.query;
        let indx = todos.indexOf(name);
        if (indx > 0)
            [todos[indx - 1], todos[indx]] = [todos[indx], todos[indx - 1]];
        res.redirect('/');
    }
    catch (err) {
        res.send(err);
    }
})

app.get('/decrease', (req, res) => {
    try {
        const { name } = req.query;
        let indx = todos.indexOf(name);
        if (indx < todos.length-1)
            [todos[indx + 1], todos[indx]] = [todos[indx], todos[indx + 1]];
        res.redirect('/');
    }
    catch (err) {
        res.send(err);
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});