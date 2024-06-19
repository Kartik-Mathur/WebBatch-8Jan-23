import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App 