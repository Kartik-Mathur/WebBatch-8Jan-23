import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const coursesHandler = () => {
        navigate('/courses');
    }

    return (
        <div>
            <button onClick={coursesHandler}>Courses</button>
        </div>
    )
}

export default Home