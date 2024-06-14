import React, { useState, useEffect } from 'react'
import initialProducts from './products'

const SearchProducts = () => {
    const [products, setProducts] = useState(initialProducts);
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => {
        let id = setTimeout(() => {
            console.log("You are searching", searchItem);
            const filteredProducts = initialProducts.filter(p => {
                if (p.toLowerCase().includes(searchItem.toLowerCase())) {
                    return true;
                }
                return false;
            })
            setProducts(filteredProducts);
        }, 1000);

        return () => {
            clearInterval(id);
        }
    }, [searchItem]);

    const inputChangeHandler = (ev) => {
        setSearchItem(ev.target.value);
    }

    return (
        <>
            <input type='text' placeholder='Search Product' onChange={inputChangeHandler} />
            <button>Search</button>
            {products.map(((p, indx) => {
                return <div key={indx}>{p}</div>
            }))}
        </>
    )
}

export default SearchProducts