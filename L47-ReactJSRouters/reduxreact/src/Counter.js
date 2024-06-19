import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from './action/counterAction';

// function incrementCounter() {
//     return {
//         type: "increment/counter"
//     }
// }

const Counter = () => {
    const dispatch = useDispatch();
    const counterVal = useSelector(state => state.counterReducer);

    return (
        <div>
            <button onClick={() => { dispatch(incrementCounter()) }}>+</button>
            <span> {counterVal}</span>
            <button onClick={() => { dispatch(decrementCounter()) }}>-</button>
            {/* <button onClick={()=>{dispatch({type:'increment/counter'})}}>+</button>
            <span> {counterVal}</span>
            <button onClick={()=>{dispatch({type:'decrement/counter'})}}>-</button> */}
        </div>
    )
}

export default Counter