const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

let students = [
    "Abhishek Pandey", "Archana", "Varda", "Ishan Gupta"
];

let teachers = [
    "Kartik", "Monu", "Sabeel", "Mosina"
];

// IMPLEMENT THE FOLLOWING APIs
// 1. GET '/students': GET Details of all students
app.get('/students', (req, res) => {
    res.send(students);
})
// 2. POST '/student': Add one student to students[]
app.post('/student', (req, res) => {
    let { name } = req.body; // get the data from request body
    students.push(name);
    res.redirect('/students')
})
// 3. POST '/student/remove': Remove the student by name provided in queryParam
app.post('/student/remove', (req, res) => {
    let { name } = req.body; // get the data from request body
    students = students.filter(s => s !== name);
    res.redirect('/students')
})
// 4. GET 'teachers': GET details of all teachers
app.get('/teachers', (req, res) => {
    res.send(teachers);
})
// 5. POST '/teachers/update': Update the name of the teacher using body {oldName, newName}
app.post("/teachers/update", (req, res) => {
    let { oldName, newName } = req.body;
    let indx = teachers.indexOf(oldName);
    if (indx != -1) teachers[indx] = newName;

    res.redirect('/teachers');
})
// For example: body : {oldName: "Kartik", newName: "Kartik Mathur"}
// ["Kartik", "Monu", "Sabeel", "Mosina"]
// ["Kartik Mathur", "Monu", "Sabeel", "Mosina"]



app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});