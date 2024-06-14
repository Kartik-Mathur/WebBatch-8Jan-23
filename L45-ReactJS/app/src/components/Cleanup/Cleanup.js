import React, { useEffect, useState } from 'react'

const Cleanup = () => {
    const [product, setProduct] = useState("");

    useEffect(() => {

        let id = setTimeout(() => {
            console.log("Running useEffect");
            console.log("Searching for product",product);
        }, 1000);

        return () => {
            clearInterval(id);
        }
    }, [product]);

    const inputChangeHandler = (ev) => {
        // console.log(ev.target.value);
        setProduct(ev.target.value);
        // console.log("Calling API");
    }
    return (
        <div>
            <h1>Learning about clean ups!</h1>
            <input type='text' placeholder='Search Product' onChange={inputChangeHandler} />
            <button>Search</button>
        </div>
    )
}

export default Cleanup