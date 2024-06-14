import React, { useState, useEffect } from 'react'
import products from './products'

const SearchProducts = () => {
    const [product, setProduct] = useState("");

    useEffect(() => {

        let id = setTimeout(() => {
            console.log("Running useEffect");
            console.log("Searching for product", product);
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
        <>
            <input type='text' placeholder='Search Product' onChange={inputChangeHandler} />
            <button>Search</button>
            {products.map(((p,indx) => {
                return <div key={indx}>{p}</div>
            }))}
        </>
    )
}

export default SearchProducts