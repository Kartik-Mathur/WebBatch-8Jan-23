import React from 'react'
import { moneyContext } from '../App';

const Child = () => {
    return (
        <div>
            <h2>I am just a Baby!</h2>
            <moneyContext.Consumer>
                {(data) => <>
                    <div>{data.price}</div>
                    <img src={data.img} />
                </>
                }
            </moneyContext.Consumer>
        </div>
    )
}

export default Child