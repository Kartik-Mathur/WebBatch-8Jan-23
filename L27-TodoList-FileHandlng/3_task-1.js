let students = [
    "Abhishek Pandey", "Archana", "Varda", "Ishan Gupta"
];

let teachers = [
    "Kartik", "Monu", "Sabeel", "Mosina"
];

// IMPLEMENT THE FOLLOWING APIs
// 1. GET '/students': GET Details of all students
// 2. POST '/student': Add one student to students[]
// 3. POST '/student/remove': Remove the student by name provided in queryParam
// 4. GET 'teachers': GET details of all teachers
// 5. POST '/teachers/update': Update the name of the teacher using body {oldName, newName}
// For example: body : {oldName: "Kartik", newName: "Kartik Mathur"}
// ["Kartik", "Monu", "Sabeel", "Mosina"]
// ["Kartik Mathur", "Monu", "Sabeel", "Mosina"]