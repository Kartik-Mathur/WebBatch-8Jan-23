import React, { useState } from 'react'
// import classes from './Counter.module.css';
import classes from './Counter.module.css';

const Counter = () => {
    // let counter = 1;
    let initValCounter = 0;
    const [counter, setCounter] = useState(initValCounter);

    function increaseCounter() {
        // counter++;
        if (counter < 5) {
            setCounter(counter + 1);
            console.log("Increasing Counter Value", counter);
        }
    }

    function decreaseCounter() {
        // counter--;
        if (counter > 0) {
            setCounter(counter - 1);
            console.log("Decreasing Counter Value", counter);
        }
    }

    return (
        <div className={classes['counter']}>
            <button onClick={decreaseCounter}>-</button>
            <span>Counter Value: {counter}</span>
            <button onClick={increaseCounter}>+</button>
        </div>
    )
}

export default Counter