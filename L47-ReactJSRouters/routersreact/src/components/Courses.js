import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Courses = () => {
    return (
        <div>
            <h4 className='coursesHeading'>My Courses</h4>
            <nav className='courses-navbar'>
                <Link className='courses-navlink' to="cpp">CPP</Link>
                <Link className='courses-navlink' to="java">Java</Link>
                <Link className='courses-navlink' to="python">Python</Link>
            </nav>

            {/* <div className='container'>
                <div className='side-a'> SIDE - A

                </div>
                <div className='side-b'> SIDE - B

                </div>
            </div> */}

            <div className='side-c'> 
                <Outlet />
            </div>
        </div>
    )
}

export default Courses