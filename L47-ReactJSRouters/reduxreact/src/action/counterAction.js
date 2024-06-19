function incrementCounter() {
    return {
        type: "increment/counter"
    }
}

function decrementCounter() {
    return {
        type: "decrement/counter"
    }
}

export {incrementCounter,decrementCounter}