import React, { useState, useEffect } from 'react'

const catFacts = () => {
    // const [facts, setFacts] = useState(second);
    // function getFacts() {
    //     return new Promise((resolve, reject) => {
    //         fetch('https://cat-fact.herokuapp.com/facts')
    //             .then(res => res.json())
    //             .then((data) => {
    //                 // console.log(data);
    //                 resolve(data);
    //             })
    //             .catch(err => reject(err));
    //     })
    // }
    // getFacts()
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(err => console.log(err))
    useEffect(()=>{
        console.log("Inside Effect");
    })
    return (
        <div>
            <h2>Cat Facts are: </h2>
        </div>
    )
}

export default catFacts