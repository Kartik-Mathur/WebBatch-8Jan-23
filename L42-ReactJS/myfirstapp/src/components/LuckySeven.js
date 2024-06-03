import React from 'react'
import './LuckySeven.css';

let winningGif = 'https://media.tenor.com/0K4GpQ6riRoAAAAC/leave-flying.gif';
let losingGif = 'https://media1.tenor.com/m/jfcWpXpbTCwAAAAC/kto-kounotori.gif';

const LuckySeven = () => {
    let randomNumber = Math.floor(Math.random() * 10 + 1);

    return (
        <div>
            <h3 className="luckySevenHeading">LuckySeven</h3>
            <div className='luckyNumber'>Lucky Number is : {randomNumber}</div>
            {randomNumber == 7 && <img className='img' src={winningGif} />}
            {randomNumber != 7 && <img className='img' src={losingGif} />}
        </div>
    )
}

export default LuckySeven