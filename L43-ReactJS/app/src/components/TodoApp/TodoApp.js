import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList';


const TodoApp = () => {
    let initialTasks = ['Cricket', 'Dance', 'Sing'];
    const [tasks, setTasks] = useState(initialTasks);


    return (
        <div>
            <h2>Todo App</h2>

            {/* <input type='text' placeholder='Enter Task Name' />
        <button onClick={taskHandler}>Add Task</button> */}
            {/* TodoList({tasks}); */}
            <TodoList tasks={tasks} />
        </div>
    )
}

export default TodoApp