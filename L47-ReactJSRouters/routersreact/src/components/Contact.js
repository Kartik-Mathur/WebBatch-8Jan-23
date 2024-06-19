import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
    const params = useParams();
    const name = params.name;

  return (
    <div>Contact: {name}</div>
  )
}

export default Contact