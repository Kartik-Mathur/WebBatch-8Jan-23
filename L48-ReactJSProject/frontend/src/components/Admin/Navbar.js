import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to="/admin/restaurant">New Restaurant</NavLink>
            <NavLink to="/admin/restaurant-list">Available Restaurants</NavLink>
        </nav>
    </div>
  )
}

export default Navbar