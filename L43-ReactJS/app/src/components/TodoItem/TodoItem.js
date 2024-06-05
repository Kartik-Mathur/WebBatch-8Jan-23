import React from 'react'
import classes from './TodoItem.module.css';

const TodoItem = ({ taskName }) => {
    return (
        <div className={classes['taskItem']}>
            <div className={classes['taskName']}>{taskName}</div>
            <div className={classes['btnGroup']}>
                <button>↑</button>
                <button>↓</button>
                <button>x</button>
            </div>
        </div>
    )
}

export default TodoItem