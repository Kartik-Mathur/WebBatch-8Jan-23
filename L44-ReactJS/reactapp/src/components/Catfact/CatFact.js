import React, { useEffect, useState } from 'react'
import Fact from './Fact'

const CatFact = () => {
    const [val, setVal] = useState(0);
    const [facts, setFacts] = useState([]);

    useEffect(() => {
        console.log("Inside Effect");
        // setVal(!val)
        fetch('https://cat-fact.herokuapp.com/facts')
            .then(res => res.json())
            .then(data => {
                console.log(val, data)
                setFacts(data);
            })
    }, [])

    return (
        <div>
            <div>{val}</div>
            <button onClick={() => setVal(val + 1)}>Change Value</button>
            <ul>
                {facts.map(f => <Fact key={f._id} fact={f.text} />)}
            </ul>
        </div>
    )
}

export default CatFact