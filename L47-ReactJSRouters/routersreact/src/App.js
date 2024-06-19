import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import Courses from './components/Courses'
import Cpp from './components/Courses/Cpp'
import Java from './components/Courses/Java'
import Python from './components/Courses/Python'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />}>
          <Route index element={<Python />} />
          <Route path='cpp' element={<Cpp />} />
          <Route path='java' element={<Java />} />
          <Route path='python' element={<Python />} />
        </Route>
      </Routes>
    </>
  )
}

export default App 