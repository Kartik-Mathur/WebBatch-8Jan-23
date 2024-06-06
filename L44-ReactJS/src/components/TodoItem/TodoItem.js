import React from 'react'

const TodoItem = ({ taskName, decreasePriority, increasePriority, deleteTask }) => {
    return (
        <div>
            <div>{taskName}</div>
            <div>
                <button onClick={() => increasePriority(taskName)}>↑</button>
                <button onClick={() => decreasePriority(taskName)}>↓</button>
                <button onClick={() => deleteTask(taskName)}>x</button>
            </div>
        </div>
    )
}

export default TodoItem