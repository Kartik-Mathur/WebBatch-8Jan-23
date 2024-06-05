import React from 'react'
import TodoItem from '../TodoItem/TodoItem';

const TodoList = (props) => {
    let tasks = props.tasks;
    return (
        <div>
            <ul>
                {tasks.map((task, indx) => <TodoItem key={indx} taskName={task} />)}
            </ul>
        </div>
    )
}

export default TodoList