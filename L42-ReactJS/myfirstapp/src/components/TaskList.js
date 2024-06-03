import React from 'react'

const tasks = [
    'Cricket', 'Dance', 'Sing', 'Volleyball', "Football", "Coding"
]

const TaskList = () => {
    return (
        <div>
            <h2>Task List</h2>
            {tasks.map((t,indx) => <div key={indx}>{t}</div> )}
        </div>
    )
}

export default TaskList 