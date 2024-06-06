import React from 'react'
import classes from './TodoItem.module.css';

const TodoItem = ({ taskName, decreasePriority, increasePriority, deleteTask }) => {
    return (
        <div className={classes['taskItem']}>
            <div className={classes['taskName']}>{taskName}</div>
            <div className={classes['btnGroup']}>
                <button onClick={() => increasePriority(taskName)}>↑</button>
                <button onClick={() => decreasePriority(taskName)}>↓</button>
                <button onClick={() => deleteTask(taskName)}>x</button>
            </div>
        </div>
    )
}

export default TodoItem