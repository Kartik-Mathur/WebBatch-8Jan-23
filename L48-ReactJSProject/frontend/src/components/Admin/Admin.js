import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import RestaurantList from './Restaurant/RestaurantList';

const Admin = () => {
  return (
    <div>
        <Navbar />

        <Routes>
            {/* <Route path='/admin/restaurant' element={<Restaurant />} /> */}
            <Route path='/admin/restaurant-list' element={<RestaurantList />} />
        </Routes>
    </div>
  )
}

export default Admin