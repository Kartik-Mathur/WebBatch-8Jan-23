import React, {useRef, useState} from 'react'

const TodoInput = ({ addTask }) => {
    const taskName = useRef();
    // const [taskName, setTaskName] = useState('');

    function addTodoHandler(){
        console.log(taskName.current.value)
        addTask(taskName.current.value);
    }
    
    // function inputChangeHandler(ev){
    //     setTaskName(ev.target.value)
    //     console.log(ev.target.value)
    // }

    return (
        <div>
            <input ref={taskName} type="text" placeholder="Enter todo item" />
            {/* <input onChange={inputChangeHandler} type="text" placeholder="Enter todo item" /> */}
            <button onClick={addTodoHandler}>Add Todo</button>
        </div>
    )
}

export default TodoInput