let students = [
    {
        name: 'Arjun',
        age: '20',
        marks: '90'
    },
    {
        name: "Pratik",
        age: 18,
        marks: 40
    },
    {
        name: "Salman",
        age: 28,
        marks: 90
    },
    {
        name: "Dhairya",
        age: 48,
        marks: 100
    },
    {
        name: "Shivansh",
        age: 280,
        marks: 190
    },
    {
        name: "Rahul",
        age: 38,
        marks: 290
    },
    {
        name: "Abhivan",
        age: 218,
        marks: 190
    },
    {
        name: "Rahul",
        age: 281,
        marks: 901
    },
    {
        name: "Bipin",
        age: 14,
        marks: 20
    }
]

let names = ["ABC","DEF","GHI","JKL","MNO","PQR"];

let newStudents = [];
for(let i = 0 ; i < 35 ; i++){
    newStudents.push({
        name : names[Math.floor(Math.random()*6)],
        rank: i
    })
}
console.log(newStudents);