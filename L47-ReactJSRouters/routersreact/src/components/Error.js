import React from 'react'
import {useNavigate } from 'react-router-dom'

export const Error = () => {
    const navigate = useNavigate();

    const clickHandler = ()=>{
        navigate(-1);
    }
    
  return (
    <div>
        <h1>Kaha Aa gaya tu vapis jaa</h1>
        <button onClick={clickHandler}>Back</button>
    </div>
  )
}
